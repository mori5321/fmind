module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'import',
    'unused-imports',
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'object-curly-spacing': ['error', 'always'],
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],

    'import/order': [
      'error',
      {
        'groups': [
          'builtin',  // 組み込みモジュール
          'external', // npmでインストールした外部ライブラリ
          'internal', // 自作モジュール
          [
            'parent',
            'sibling'
          ],
          'object',
          'type',
          'index'
        ],
        'newlines-between': 'always', // グループ毎にで改行を入れる
        'pathGroupsExcludedImportTypes': [
          'builtin'
        ],
        'alphabetize': {
          'order': 'asc', // 昇順にソート
          'caseInsensitive': true // 小文字大文字を区別する 
        },
        'pathGroups': [ // 指定した順番にソートされる
          {
            'pattern': '@/components/common',
            'group': 'internal',
            'position': 'before'
          },
          {
            'pattern': '@/components/hooks',
            'group': 'internal',
            'position': 'before'
          },
        ]
      }
    ],
    'unused-imports/no-unused-imports': 'error'
  }
}
