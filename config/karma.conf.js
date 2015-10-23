// Karma configuration
// Generated on Tue Feb 17 2015 01:43:55 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-ng-html2js-preprocessor'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    // TODO: grunt task to scrape index.html for files to load
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/app.js',
      'app/chessboard/chessboard.js',
      'app/components/components.js',
      'app/heat-map-engine/heat-map-engine.js',
      'app/legal-moves/legal-moves.js',
      'app/*.js',
      'app/*[^_]*.js',
      'app/**/*[^_]*.js',
      'app/**/*.js',
      'app/**/*.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/*.tpl.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      /* TODO: resolve filepath for this non-rails application (if neccesary)
      cacheIdFromPath: function(filepath) {
        return "/assets" + filepath.split('/javascripts').pop();
      },
      */
      moduleName: 'templates' // TODO: replace this with environment variable ?
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
