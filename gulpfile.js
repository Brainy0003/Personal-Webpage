var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

// Run sass files to css files
gulp.task('sass', function() {
  return gulp.src('build/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build'));
});

// Format css stylesheets with autoprefixer
gulp.task('style-formatting', function() {
  gulp.src('build/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('styles'));
});

// Watch both sass and css files and update automatically
gulp.task('watch', function() {
  gulp.watch('build/*.scss', ['sass']),
  gulp.watch('build/*.css', ['style-formatting'])
});