const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('styles', function () {
  return gulp
    .src('./assets/*.css')
    .pipe(postcss([
      autoprefixer(),
      cssnano(),
    ]))
    .pipe(gulp.dest('./assets')); 
});

gulp.task('scripts', function () {
  return gulp
  .src('./assets/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./assets'));
});