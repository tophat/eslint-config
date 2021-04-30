const { builtinModules } = require('module')
const path = require('path')

const builtins = new Set(builtinModules)

const resolve = (source, file) => {
    if (builtins.has(source)) {
        return { found: true }
    }

    try {
        return { found: true, path: require.resolve(source, { paths: [path.dirname(file)] }) }
    } catch (err) {
        return { found: false }
    }
}

module.exports = {
    interfaceVersion: 2,
    resolve,
}
