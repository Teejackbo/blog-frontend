const gulp = require('gulp')
const sass = require('gulp-sass')
const sassLint = require('gulp-sass-lint')
const autoprefixer = require('gulp-autoprefixer')
const eslint = require('gulp-eslint')
const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
}

gulp.task('sass', () => {
  return gulp
    .src('src/sass/*.sass')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('public'))
})

gulp.task('watch-sass', () => {
  return gulp
    .watch('src/sass/**/*.sass', ['sass'])
    .on('change', event => `File ${event.path} was ${event.type}.`)
})

gulp.task('lint', () => {
  return gulp
    .src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('sass-lint', () => {
  return gulp
    .src('src/sass/**/*.sass')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
})
