module.exports = {
    targets: {
        node: '14',
    },
    presets: [
        '@babel/preset-env',
        {
            exclude: ['@babel/plugin-transform-regenerator'],
        },
    ],
}
