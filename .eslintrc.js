module.exports = {
    root: true,
    extends: ['@react-native-community', 'prettier'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier', 'import', 'module-resolver'],
    settings: {
        'import/resolver': {
            'babel-module': {},
        },
    },
    rules: {
        'import/order': [
            'error',
            {
                groups: [
                    'external',
                    'internal',
                    'index',
                    'sibling',
                    'parent',
                    'builtin',
                ],
            },
        ],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
            },
        },
    ],
};
