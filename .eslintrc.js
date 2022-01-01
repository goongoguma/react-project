module.exports = {
  // 어떤 환경(environment)에서 스크립트가 실행될 것인지 정의 (https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments 참조)
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended', // 맨 마지막에 선언
  ],
  parser: '@typescript-eslint/parser',
  // https://www.npmjs.com/package/@typescript-eslint/parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    ecmaVersion: 13,
  },

  plugins: ['@typescript-eslint', 'react', 'import', 'prettier'],
  // 플러그인들은 settings를 사용해서 사용되어야 할 규칙들을 공유한다(https://eslint.org/docs/user-guide/configuring/configuration-files#adding-shared-settings)
  settings: {
    // eslint-plugin-import
    'import/resolver': {
      typescript: {
        project: 'tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    // eslint-plugin-react
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['build/', 'node_modules/', '.pnp.cjs', '.yarn/'],
  rules: {
    // 콘솔 로그
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.tsx'],
      },
    ],
    // 'react/function-component-definition': [
    //   'error',
    //   {
    //     namedComponents: 'function-declaration',
    //     unnamedComponents: 'arrow-function',
    //   },
    // ],
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  },
};
