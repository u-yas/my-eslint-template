// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'standard-with-typescript',
    'standard-react',
    'plugin:jsx-a11y/recommended',
    'plugin:security/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-dom/recommended',
    'plugin:jest-formatting/recommended'
  ],
  plugins: [
    'autofix',
    'react',
    'import',
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json'
  },
  rules: {

    'autofix/array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 2
      }
    ],
    'autofix/array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 2
      }
    ],

    'autofix/arrow-body-style': [
      'error',
      'as-needed'
    ],
    'autofix/comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'autofix/sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: [
          'single',
          'all',
          'multiple',
          'none'
        ],
        allowSeparatedGroups: true
      }
    ],
    'autofix/function-call-argument-newline': [
      'error',
      'consistent'
    ],
    'autofix/template-tag-spacing': [
      'error',
      'always'
    ],
    'autofix/prefer-template': ['error'],
    '@typescript-eslint/no-unused-vars': 'off',
    'autofix/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    'autofix/quotes': [
      'error',
      'single'
    ],
    eqeqeq: 'off',
    'autofix/eqeqeq': [
      'error',
      'always'
    ],
    'autofix/no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 0
      }
    ],
    'autofix/object-curly-newline': [
      'error',
      {
        ImportDeclaration: {
          multiline: false,
          minProperties: 2
        },
        ExportDeclaration: 'never'
      }
    ],
    'autofix/object-curly-spacing': [
      'error',
      'always'
    ],

    'autofix/lines-around-comment': [
      'error',
      { beforeBlockComment: true }
    ],
    'autofix/no-debugger': 'off',
    'autofix/newline-after-var': [
      'error',
      'always'
    ],
    'autofix/object-property-newline': 'error',
    'import/newline-after-import': [
      'error',
      { count: 1 }
    ],
    'import/no-duplicates': 'off',
    'import/no-absolute-path': 'off',
    // react

    // React v17 is no need Default import.
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    'react/jsx-indent-props': [
      'error',
      2
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        when: 'multiline'
      }
    ],
    'react/prop-types': 'off'
  },
  settings: {
    react: { version: 'detect' },
    'import/extensions': [
      '.ts',
      '.tsx'
    ],
    'import/resolver': {
      typescript: {}
    }
  },
  ignorePatterns: [
    '*.config.js',
    '*-env*',
    '**/dist/**',
    'app/**',
    'build/**',
    'storybook/**',
    'example-project/**'
  ]
}
