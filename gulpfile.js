var gulp       = require('gulp');
var babel      = require('gulp-babel');
var babelify   = require('babelify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

var path = ['./components/*.js'];

gulp.task('modules', function() {
  browserify({
    entries: './app.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./build'))
});

gulp.task('watch', function() {
  gulp.watch(path, ['modules']);
});

gulp.task('default', ['modules']);
