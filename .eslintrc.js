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
    'vue/v-on-event-hyphenation': 'off', // <- perhaps remove later
    'vue/require-explicit-emits': 'off', // <- should remove later
    'vue/no-v-html': 'off',
    'vue/max-attributes-per-line': ['warn', {
      'singleline': 2,
    }],
    'vue/multi-word-component-names': 'warn',
    /**
     * @important - should we keep ban-ts-comment
     * we probably need it for 3rd party things, like plugins/fontawsome.ts
     */
    '@typescript-eslint/ban-ts-comment': 'warn',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-multiple-empty-lines': ['error', { 'max': 1 } ],
    'quotes': ['error', 'single'],
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', {
      'after': true,
      'before': true
    }],
  },
}
