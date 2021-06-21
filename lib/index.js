const { builtinModules } = require('module')
const path = require('path')

const builtins = new Set(builtinModules)

const resolve = (source, file) => {
    if (builtins.has(source)) {
        return { found: true }
    }

    try {
        let moduleId = require.resolve(source, { paths: [path.dirname(file)] })
        if (process.versions.pnp && moduleId.includes('__virtual__')) {
            moduleId = require('pnpapi').resolveVirtual(moduleId)
        }
        return { found: true, path: moduleId }
    } catch (err) {
        return { found: false }
    }
}

module.exports = {
    interfaceVersion: 2,
    resolve,
}
