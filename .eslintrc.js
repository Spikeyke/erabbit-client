module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    "invalid-first-character-of-tag-name": false,
    'vue/no-parsing-error': [2, {
      "x-invalid-end-tag": false
    }]
  }
}
