module.exports = function(config) {
  config.set({
    // basePath: '',
    frameworks: ['mocha', 'browserify'],
    files: [
      {
        pattern: 'css/**.test.js',
        included: true
      },
      {
        pattern: 'css/**',
        served: true,
      }
    ],
    preprocessors: {
    '**/*.test.js': [ 'browserify' ],
    '**/*.secrets.js': [ 'browserify' ]
    },
    plugins: [
      'karma-mocha',
      'karma-browserify',
      'karma-quixote'
    ]
  });
};
