module.exports = {
  '*.css': ['./scripts/meta/lint --css --fix'],
  '*.yml': ['./scripts/meta/lint --yml --fix'],
  '*.circleci/config.yml': ['./scripts/meta/lint --circleci'],
  '*.json': ['./scripts/meta/lint --json --fix'],
  '*.js': ['./scripts/meta/lint --js --fix'],
  'modules/*/lib/**/*.js': './scripts/meta/test --failFast --findRelatedTests',
};
