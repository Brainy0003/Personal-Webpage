var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('style-formatting', function() {
  gulp.src('build/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('styles'));
});

gulp.task('watch', function() {
  gulp.watch('build/*.css', ['style-formatting']);
});