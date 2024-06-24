module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'next/core-web-vitals',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',
      '@typescript-eslint',
    ],
    rules: {
    "@typescript-eslint/no-explicit-any": "off", // Désactiver les erreurs pour 'any'
    "@typescript-eslint/no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }], // Réduire la sévérité pour les variables non utilisées
    "no-extra-semi": "warn" // Réduire la sévérité pour les points-virgules supplémentaires
    },
  }
  