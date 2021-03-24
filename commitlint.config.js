module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(commit) => commit.includes(':bug:')],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'bug',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build'
      ]
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}
