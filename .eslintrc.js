/* eslint-env node */
module.exports = {
    env: {
        'browser': true,
        'es2022': true,
        'node': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
    }
};