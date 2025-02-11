module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'react'],
    rules: {
        'no-var': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto'
            }
        ],
        'react/react-in-jsx-scope': 'off'
    }
};
