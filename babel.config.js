module.exports = {
    targets: {
        node: '16',
    },
    presets: [
        '@babel/preset-env',
        {
            exclude: ['@babel/plugin-transform-regenerator'],
        },
    ],
}
