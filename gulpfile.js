const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const cssbeautify = require('gulp-cssbeautify');
const del = require('del');
const gulp = require('gulp');
const penthouse = require('gulp-penthouse');
const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');
const livereload = require('gulp-livereload');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

// HTML
gulp.task('reload-html', () => {
  gulp.src('*.html').pipe(livereload());
});

// CSS Styles
gulp.task('styles', () =>
  gulp
    .src('src/scss/*.scss')
    .pipe(plumber(function (err) {
      console.log('Styles Task Error');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'expanded' }))
    .pipe(cssbeautify({
      indent: '  ',
      openbrace: 'end-of-line',
      autosemicolon: true,
    }))
    .pipe(gulp.dest('src/css/'))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(cleanCSS({ level: '2' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('../css/', {
      sourceMappingURL(file) {
        return `${file.relative}.map`;
      },
    }))
    .pipe(gulp.dest('public/css/'))
    .pipe(livereload()));

// Penthouse Critical CSS
gulp.task('critical-css', () =>
  gulp
    .src('src/css/style.css')
    .pipe(penthouse({
      out: 'critical.css',
      url: 'https://asjasroos.co.za',
      width: 1900,
      height: 1200,
      strict: true,
      timeout: 30000,
      pageLoadSkipTimeout: 0,
      forceInclude: [
        // selectors to keep
        '.keepMeEvenIfNotSeenInDom',
        /^\.regexWorksToo/,
      ],
      userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(cleanCSS({ level: '2' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('../css/', {
      sourceMappingURL(file) {
        return `${file.relative}.map`;
      },
    }))
    .pipe(gulp.dest('public/css/')));

// JavaScript
gulp.task('minify-js', () =>
  gulp
    .src('src/js/*.js')
    .pipe(plumber(function (err) {
      console.log('JavaScript Task Error');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('../js/', {
      sourceMappingURL(file) {
        return `${file.relative}.map`;
      },
    }))
    .pipe(gulp.dest('public/js/'))
    .pipe(livereload()));

// Images
gulp.task('image-minify', () =>
  gulp
    .src('src/images/*')
    .pipe(imagemin([
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 7 }),
      imagemin.svgo(),
      imageminPngquant({ quality: '30' }),
      imageminJpegRecompress({
        accurate: true,
        quality: 'low',
        max: 35,
      }),
    ]))
    .pipe(gulp.dest('public/images/'))
    .pipe(livereload()));

// Cleanup public folders
gulp.task('clean', () =>
  del.sync(['public/css/*.css*', 'src/css/critical/*', 'src/css/*.css', 'public/js/*min.js*', 'public/images/*']));

// Default task
gulp.task(
  'default',
  ['clean', 'reload-html', 'styles', 'minify-js', 'image-minify', 'critical-css'],
  () => {
    console.log('Running default task');
  },
);

// Watch task runner
gulp.task('watch', ['default'], () => {
  console.log('Starting watch task');
  require('./server.js');
  livereload.listen();
  gulp.watch('src/scss/*.scss', ['styles']),
  gulp.watch('src/css/*.css', ['critical-css']),
  gulp.watch('src/js/*.js', ['minify-js']),
  gulp.watch('*.html', ['reload-html']),
  gulp.watch('src/images/*', ['image-minify']);
});
