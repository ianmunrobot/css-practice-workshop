module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'browserify'],
    reporters: ['mocha'],
    files: [
      {
        pattern: 'css/**.test.js',
        included: true
      },
      {
        pattern: 'css/**',
        included: true,
      },
    ],
    preprocessors: {
    '**/*.test.js': [ 'browserify' ],
    '**/*.secrets.js': [ 'browserify' ],
    '**/*.utils.js': [ 'browserify' ]
    },
    plugins: [
      'karma-mocha',
      'karma-browserify',
      'karma-quixote',
      'karma-mocha-reporter'
    ]
  });
};
