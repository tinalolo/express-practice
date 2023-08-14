module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'prettier', 'import'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:import/typescript',
    ],
    env: {
        browser: false,
        node: true,
        es2021: true,
        jest: true,
    },
    ignorePatterns: ['src/migrations/**/*.ts'],
    rules: {
        'linebreak-style': [0, 'error', 'windows'],
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'import/prefer-default-export': 'off',
    },
};
