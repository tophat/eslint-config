const { builtinModules } = require('module')

const builtins = new Set(builtinModules)

const resolve = (source, file) => {
    if (builtins.has(source)) {
        return { found: true }
    }

    try {
        return { found: true, path: require.resolve(source, { paths: [file] }) }
    } catch (err) {
        return { found: false }
    }
}

module.exports = {
    interfaceVersion: 2,
    resolve,
}
