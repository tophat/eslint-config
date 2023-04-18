import { builtinModules } from 'module'
import path from 'path'

const builtins = new Set(builtinModules)

const resolve = (source: string, file: string) => {
    if (builtins.has(source)) {
        return { found: true }
    }

    try {
        let moduleId = require.resolve(source, { paths: [path.dirname(file)] })
        if (process.versions.pnp && moduleId.includes('__virtual__')) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            moduleId = require('pnpapi').resolveVirtual(moduleId)
        }
        return { found: true, path: moduleId }
    } catch (err) {
        return { found: false }
    }
}

export = {
    interfaceVersion: 2,
    resolve,
}
