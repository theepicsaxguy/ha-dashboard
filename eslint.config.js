import tseslint from 'typescript-eslint';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config(
  // Common options; e.g. folders/files to ignore
  {
    ignores: ['dist'],
  },
  // Base configuration
  {
    extends: [...tseslint.configs.recommendedTypeChecked, ...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // Fix ECMAScript version and include browser globals
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      // Retain React Hooks and React Refresh for proper linting
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      // Also include the new React plugins if desired
      'react-x': reactX,
      'react-dom': reactDom,
    },
    rules: {
      // Recommended React Hooks rules and fast refresh checks
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // New plugin rules (if you want extra linting)
      ...reactX.configs['recommended-typescript'].rules,
      ...reactDom.configs.recommended.rules,
    },
  }
);
