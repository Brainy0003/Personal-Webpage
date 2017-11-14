const autoprefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const cleanCSS = require("gulp-clean-css");
const cssbeautify = require("gulp-cssbeautify");
const gulp = require("gulp");
const livereload = require("gulp-livereload");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");

// HTML
gulp.task("reload-html", function() {
  gulp.src("*.html")
    .pipe(livereload());
});

// Styles
gulp.task("styles", function() {
  return gulp.src("src/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ style: "expanded" }))
    .pipe(plumber(function (err) {
      console.log("Styles Task Error");
      console.log(err);
      this.emit("end");
    }))
    .pipe(cssbeautify({
      indent: "  ",
      openbrace: "end-of-line",
      autosemicolon: true
    }))
    .pipe(gulp.dest("src/css/"))
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: "ie8"}))
    .pipe(cleanCSS({level: "2"}))
    .pipe(cleanCSS({format: "keep-breaks"}))
    .pipe(sourcemaps.write())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("public/css/"))
    .pipe(livereload());
});

// JavaScript
gulp.task("minify-js", function (){
  return gulp.src("src/js/*.js")
    .pipe(plumber(function (err) {
      console.log("JavaScript Task Error");
      console.log(err);
      this.emit("end");
    }))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ["es2015"]
    }))
    .pipe(uglify())
    .pipe(gulp.dest("public/js/"))
    .pipe(sourcemaps.write())
    .pipe(rename({suffix: ".min"}))
    .pipe(livereload());
});

// Watch task runner
gulp.task("watch", function() {
  console.log("Starting watch task");
  require("./server.js");
  livereload.listen();
  gulp.watch("src/scss/*.scss", ["styles"]),
  gulp.watch("src/js/*.js", ["minify-js"]),
  gulp.watch("*.html", ["reload-html"]);
});
