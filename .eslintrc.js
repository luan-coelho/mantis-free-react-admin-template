module.exports = {
    extends: [
        'next',
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
    ],
    plugins: ['prettier', 'react'],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': 'error',
        'react/prop-types': 'off',
    },
}
