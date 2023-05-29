var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require("gulp-autoprefixer");
var cleanCSS = require('gulp-clean-css');

gulp.task('style', () => 
gulp.src('css/*.scss')
.pipe(sass().toString('error', sass.logError))
.pipe(autoprefixer({
  browsers: ['last 5 versions']
}))
.pipe(cleanCSS())
.pipe(gulp.dest('build'))
);

gulp.task('watch', () =>
    gulp.watch('css/style.css', gulp.series('styles')));