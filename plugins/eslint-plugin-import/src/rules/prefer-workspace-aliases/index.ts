import fs from 'fs'
import path from 'path'

import { ESLintUtils, type TSESLint } from '@typescript-eslint/utils'

type Manifest = {
    dependencies?: { [name in string]?: string }
    devDependencies?: { [name in string]?: string }
    peerDependencies?: { [name in string]?: string }
}

const aliasCache = new Map<
    string,
    {
        aliasToFilepath: { [name in string]?: string }
        filepathToAlias: [string, string][]
    }
>()

/**
 * We scan the manifest in the current working directory to generate a mapping
 * of paths to alias names. We then sort the collection so longer paths have higher
 * precedence. This lets us choose the alias/name that provides the most specific
 * coverage.
 */
function parseAliases(cwd: string, manifestOverride?: Manifest) {
    if (!aliasCache.has(cwd)) {
        try {
            const manifest =
                manifestOverride ??
                JSON.parse(
                    fs.readFileSync(path.join(cwd, 'package.json'), 'utf-8'),
                )
            const filepathToAlias: { [name in string]: string } = {}
            const aliasToFilepath: { [name in string]?: string } = {}
            for (const setKey of ['dependencies', 'devDependencies']) {
                if (!manifest[setKey]) continue

                for (const [name, resolution] of Object.entries(
                    manifest[setKey],
                )) {
                    if (typeof resolution !== 'string') continue

                    const [protocol, filepath] = resolution.includes(':')
                        ? resolution.split(':')
                        : ['npm', resolution]
                    if (protocol === 'link' || protocol === 'workspace') {
                        const relativeFilepath = path.relative(cwd, filepath)
                        filepathToAlias[relativeFilepath] = name
                        aliasToFilepath[name] = relativeFilepath
                    }
                }
            }
            aliasCache.set(cwd, {
                aliasToFilepath,
                filepathToAlias: Object.entries(filepathToAlias).sort(
                    ([pathA], [pathB]) => pathB.length - pathA.length,
                ),
            })
        } catch {
            // eslint-disable-next-line no-console
            console.error('Failed to parse alias cache.')
        }
    }
    return aliasCache.get(cwd)
}

function resolveWithAlias({
    unresolvedPath,
    aliasToFilepath,
    cwd,
    base,
}: {
    unresolvedPath: string
    aliasToFilepath: { [name in string]?: string }
    cwd: string
    base: string
}) {
    if (unresolvedPath.startsWith('.')) {
        return path.relative(cwd, path.resolve(base, unresolvedPath))
    }

    const [baseDir, ...rest] = unresolvedPath.split(path.sep)
    const filepath = aliasToFilepath[baseDir]
    if (filepath) {
        return path.join(filepath, ...rest)
    }

    return unresolvedPath
}

function rewritePath({
    importPath,
    context,
    filepathToAlias,
    aliasToFilepath,
}: {
    importPath: string
    context: Readonly<TSESLint.RuleContext<string, readonly unknown[]>>
    filepathToAlias: [string, string][]
    aliasToFilepath: { [name in string]?: string }
}) {
    for (const [aliasPath, alias] of filepathToAlias) {
        const resolvedImportPath = resolveWithAlias({
            unresolvedPath: importPath,
            aliasToFilepath,
            cwd: context.getCwd?.() ?? process.cwd(),
            base: path.dirname(context.getFilename()),
        })
        const relative = path.relative(aliasPath, resolvedImportPath)
        if (!relative.startsWith('.')) {
            return path.join(alias, relative)
        }
    }
    return null
}

const createRule = ESLintUtils.RuleCreator((name) => `@tophat/${name}`)

const rule = createRule({
    name: 'prefer-workspace-aliases',
    meta: {
        docs: {
            description:
                'Do not use relative imports if an alias is available.',
            recommended: 'error',
        },
        messages: {
            'rewrite-import':
                "Rewrite '{{importPath}}' as '{{rewrittenPath}}'.",
        },
        type: 'suggestion',
        schema: [],
        fixable: 'code',
    },
    defaultOptions: [],
    create(context) {
        const { aliasToFilepath, filepathToAlias } =
            parseAliases(context.getCwd?.() ?? process.cwd()) ?? {}

        return {
            ImportDeclaration(node) {
                const importPath = node.source.value
                if (
                    !importPath ||
                    importPath === '.' ||
                    !filepathToAlias ||
                    !aliasToFilepath
                ) {
                    return
                }

                // Allow ./<path> as an exception
                const nRelatives =
                    path
                        .normalize(importPath)
                        .split(path.sep)
                        .findIndex((p) => p !== '..') +
                    (importPath.startsWith(`.${path.sep}`) ? 1 : 0) // normalize strips the leading '.'
                if (nRelatives > 0 && nRelatives <= 1) {
                    return
                }

                const rewrittenPath = rewritePath({
                    importPath,
                    context,
                    filepathToAlias,
                    aliasToFilepath,
                })
                if (!rewrittenPath || importPath === rewrittenPath) return

                context.report({
                    node: node.source,
                    messageId: 'rewrite-import',
                    data: {
                        importPath,
                        rewrittenPath,
                    },
                    fix(fixer) {
                        return fixer.replaceText(
                            node.source,
                            `'${rewrittenPath}'`,
                        )
                    },
                })
            },
        }
    },
})

export = {
    ...rule,
    _setAliasCache(manifest: Manifest) {
        aliasCache.clear()
        parseAliases(process.cwd(), manifest)
    },
}
