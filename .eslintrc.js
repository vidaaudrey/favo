module.exports = {
  root: true,
  extends: ['coursera'],
  rules: {
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 2 }],
    'import/extensions': [0, 'never'],
    'import/no-mutable-exports': [0], // Allow Svg icon mutable exports
  },
  globals: {
    toJson: true,
    shallow: true,
    React: true,
  },
};
