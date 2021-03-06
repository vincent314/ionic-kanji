var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var typescript = require('gulp-tsc');
var tsconfig = require('./src/tsconfig.json');
var tsconfigSpec = require('./spec/tsconfig.json');
var Server = require('karma').Server;
var sequence = require('gulp-sequence');

var paths = {
  sass: ['./scss/**/*.scss'],
  src: ['./src/**/*.ts'],
  spec: ['./spec/**/*.ts']
};

gulp.task('default', ['sass']);

gulp.task('sass', function (done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
    .on('log', function (data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function (done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('compile', function () {
  var options = tsconfig.compilerOptions;
  options.emitError = false;

  gulp.src(paths.src)
    .pipe(typescript(options))
    .pipe(gulp.dest('www/js/'))

});

gulp.task('compile-spec', function () {
  var options = tsconfigSpec.compilerOptions;
  options.emitError = false;

  gulp.src(paths.spec)
    .pipe(typescript(options))
    .pipe(gulp.dest('./output'))

});

gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/spec/karma.conf.js',
    singleRun: true
  }, function (err) {
    console.log(err);
    done();
  }).start();
});

gulp.task('test', sequence('compile','compile-spec','karma'));
