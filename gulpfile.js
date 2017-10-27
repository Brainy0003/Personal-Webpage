var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var cssbeautify = require('gulp-cssbeautify');
var gulp = require('gulp');
var sass = require('gulp-sass');

// Run sass files to css files
gulp.task('sass', function() {
  return gulp.src('build/src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/src/'));
});

// Format css stylesheets with autoprefixer
gulp.task('style-formatting', function() {
  gulp.src('build/src/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build/postcss/'));
});

// Beautify css
gulp.task('beautifycss', function() {
  return gulp.src('build/postcss/*.css')
    .pipe(cssbeautify({
      indent: '  ',
      openbrace: 'end-of-line',
      autosemicolon: true
    }))
    .pipe(gulp.dest('styles/'));;
});

// Minify css
gulp.task('minify-css', () => {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(''));
});

// Watch both sass and css files and update automatically
gulp.task('watch', function() {
  gulp.watch('build/src/*.scss', ['sass']),
  gulp.watch('build/src/*.css', ['style-formatting']),
  gulp.watch('build/postcss/*.css', ['beautifycss']),
  gulp.watch('styles/*.css', ['minify-css']);
});