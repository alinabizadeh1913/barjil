const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', async () => {
    gulp.src('./app/sass/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./app/style'))
})

gulp.task('watch', async () => {
    gulp.watch('./app/sass/*.scss',gulp.series('sass'))
})

gulp.task('default', gulp.parallel('sass','watch'))