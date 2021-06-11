module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'prettier'
    ],
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'rules': {
        'prettier/prettier': 'error',
        'indent': ['error', 4],
        "react/jsx-indent": ["error", 4],
        'linebreak-style': ['error','unix'],
        'quotes': ['error','single'],
        'semi': ['error','always'],
        'getter-return': 'error',
        "no-empty": ["error", { "allowEmptyCatch": true }],
        "eqeqeq": ["error", "always", {"null": "ignore"}],
        "no-magic-numbers": ["error", { "ignoreArrayIndexes": true }],
        "no-multi-spaces": "error",
        "no-unused-vars": "error",
        "comma-dangle": ["error", {
            "arrays": "only-multiline",
            "objects": "only-multiline",
            "imports": "only-multiline",
            "exports": "only-multiline",
            "functions": "only-multiline"
        }],
        "eol-last": ["error", "always"],
        "max-depth": ["error", 4],
        "arrow-parens": ["error", "always"],
        "no-duplicate-imports": "error",
        "no-var": "error"
    },
    'overrides': [
        {
            'files': [
                '**/*.test.js',
                '**/*.test.jsx',
                '**/*.test.tsx',
                '**/*.spec.js',
                '**/*.spec.jsx',
                '**/*.spec.tsx',
            ],
            'env': {
                'jest': true,
            },
        },
    ],
};
