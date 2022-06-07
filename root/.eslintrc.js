const path = require('path')
module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'next',
        'airbnb',
        'airbnb-typescript',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
        'plugin:react-hooks/recommended',
    ],
    plugins: ['@typescript-eslint', 'import'],
    settings: {
        next: {
            rootDir: '.',
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: [path.join(__dirname, 'tsconfig.json')],
            },
        },
    },
    parserOptions: {
        root: true,
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json']
    },
    rules: {
        // react
        'react/function-component-definition': [
            0,
            {
                namedComponents: 'arrow-function',
            },
        ],

        // next
        '@next/next/no-html-link-for-pages': 'off',
        "import/no-extraneous-dependencies": 'off',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn', // or error
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],
        'react/destructuring-assignment': 'off',
        'consistent-return': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-empty': 'off',
        'max-classes-per-file': 'off',
        'no-underscore-dangle': 'off',
        'no-nested-ternary': 'off',
        '@typescript-eslint/dot-notation': 'off',
        'no-plusplus': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-console': 'warn',
        '@typescript-eslint/no-shadow': 'off',
        'react/no-array-index-key': 'warn',
        'no-alert': 'off',
        'no-restricted-globals': 'off',
        'no-restricted-exports': 'off',
        'no-restricted-properties': 'off',
        'prefer-destructuring': 'off',
        'arrow-body-style': 'off',
        'react/jsx-boolean-value': 'warn',
        'react/self-closing-comp': 'warn',
        'prefer-exponentiation-operator': 'off',
        'spaced-comment': 'warn',
        '@typescript-eslint/lines-between-class-members': 'warn',
        'prefer-template': 'warn',
        'no-else-return': 'warn',
        'no-await-in-loop': 'warn',
        'operator-assignment': 'warn',
        'class-methods-use-this': 'warn',
        'react/no-unused-class-component-methods': 'warn',
        'react/default-props-match-prop-types': 'warn',
        '@typescript-eslint/return-await': 'warn',
        '@typescript-eslint/no-use-before-define': 'off',
        'import/newline-after-import': 'warn',
        'no-restricted-syntax': 'off',
        'react/jsx-curly-brace-presence': 'warn',
        'jsx-a11y/alt-text': 'warn',
        'import/no-unresolved': 'warn',
        'no-param-reassign': 'warn',
        'react/jsx-no-useless-fragment': 'warn',
        'jsx-a11y/anchor-has-content': 'warn',
        'jsx-a11y/anchor-is-valid': 'warn',
    },
    overrides: [
        {
            // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
            env: {
                jest: true,
            },
            files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
            extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
            rules: {
                'import/no-extraneous-dependencies': [
                    'off',
                    { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] },
                ],
            },
        },
    ],
    ignorePatterns: [
        '**/*.js',
        '**/*.json',
        'node_modules',
        'public',
        'styles',
        '.next',
        'coverage',
        'dist',
        'build',
    ],
}
