/** @type {import('eslint').Linter.Config} */
module.exports = {
   root: true,
   extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node', 'plugin:tailwindcss/recommended'],
   rules: {
      'indent': ['error', 3],
      '@typescript-eslint/no-unused-vars': 'warn',
      'object-curly-spacing': ['warn', 'always'],
      'quotes': ['error', 'single'],
      'tailwindcss/migration-from-tailwind-2': 'off'
   }
};
