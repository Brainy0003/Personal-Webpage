var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task('style-formatting', function() {
  gulp.src('build/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('styles'));
});

gulp.task('sass', function() {
  return gulp.src('build/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch('build/*.css', ['style-formatting']),
  gulp.watch('build/*.scss', ['sass'])
});