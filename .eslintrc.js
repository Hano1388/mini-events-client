// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md
module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        }
    },
    settings: {
        react: {
            version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
    extends: [
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended" // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    rules: {
        'no-shadow': 'warn',
        'no-unused-vars': 'warn',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-function-return-type': 2,
        // '@typescript-eslint/indent': 2,
        '@typescript-eslint/no-explicit-any': 1,
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/camelcase': 2,
        '@typescript-eslint/array-type': 1,
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
    },
};