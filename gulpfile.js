const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const cssbeautify = require('gulp-cssbeautify');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');

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
    .pipe(cleanCSS({level: '2'}))
    .pipe(cleanCSS({format: 'keep-breaks'}))
    .pipe(gulp.dest(''));
});

// Minify & compress images
gulp.task('minify-images', () => {
  gulp.src('build/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('images/'))
});

// Watch both sass and css files and update automatically
gulp.task('watch', function() {
  gulp.watch('build/src/*.scss', ['sass']),
  gulp.watch('build/src/*.css', ['style-formatting']),
  gulp.watch('build/postcss/*.css', ['beautifycss']),
  gulp.watch('styles/*.css', ['minify-css']),
  gulp.watch('build/images/*', ['minify-images']);
});