module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never',
    }],
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/require-explicit-emits': 'warn',
    'vue/no-v-html': 'off',
    'vue/max-attributes-per-line': ['warn', {
      'singleline': 2,
    }],
    'vue/multi-word-component-names': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-multiple-empty-lines': ['error', { 'max': 1 } ],
    'quotes': ['error', 'single'],
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', {
      'after': true,
      'before': true,
    }],
    'vue/require-default-prop': 'off',
  },
}
