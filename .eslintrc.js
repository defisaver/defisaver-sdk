
module.exports = {
  extends: ['@defisaver/eslint-config/base-config'],
  plugins: ['import'],
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
    browser: true,
  },
  overrides: [{
    // these are overrides for .ts files, meaning these are only applied to .ts files
    files: ['*.ts', '*.tsx'],
    extends: ['@defisaver/eslint-config/base-config-typescript'],
    parser: '@typescript-eslint/parser',
    parserOptions: { project: ['./tsconfig.json'] },
    // typescript rules must be added here to work
  }],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'max-len': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json'],
      },
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
