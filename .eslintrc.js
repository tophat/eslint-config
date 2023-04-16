module.exports = {
    ...require('@tophat/eslint-config'),
    ignorePatterns: ['/.yarn', '/.git', '/.github', '/.vscode', '/artifacts', '.eslintrc.js'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
}
