// Karma configuration
module.exports = function (config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      '../www/lib/angular/angular.js',
      '../www/lib/angular-mocks/angular-mocks.js',
      '../www/lib/angular-sanitize/angular-sanitize.js',
      '../www/lib/angular-ui-router/release/angular-ui-router.js',
      '../www/lib/ionic/js/ionic.js',
      '../www/lib/ionic/js/ionic-angular.js',
      '../www/lib/angular-animate/angular-animate.js',
      '../www/lib/lodash/dist/lodash.js',
      '../www/lib/wanakana/lib/wanakana.js',
      '../www/js/app.js',
      '../output/spec.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_ERROR,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    //singleRun: false,

    //preprocessors: {
    //  "app/templates/*.html": "ng-html2js",
    //  "test/html/dir/*.html": "ng-html2js",
    //  "app/scripts/**/*.js": "coverage"
    //},

    //ngHtml2JsPreprocessor: {
    //  cacheIdFromPath: function (filepath) {
    //    return filepath.replace(new RegExp('(^app/|^test/html/)'), '');
    //  },
    //  moduleName: 'templates'
    //}
  });
};
