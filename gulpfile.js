var gulp       = require('gulp');
var babel      = require('gulp-babel');
var babelify   = require('babelify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

var path = ['app.js', 'modules/*.js'];

gulp.task('default', function() {
  return gulp.src(path)
    .pipe(babel())
    .pipe(gulp.dest('./build'));
});

gulp.task('modules', function() {
  browserify({
    entries: './main.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./build'))
});

gulp.task('watch', function() {
  gulp.watch(path, ['default', 'modules']);
});
