const requireResolveOptional = (name) => {
    try {
        return require.resolve(name)
    } catch (err) {
        return null
    }
}

module.exports = { requireResolveOptional }
