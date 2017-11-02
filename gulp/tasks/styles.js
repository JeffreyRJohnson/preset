var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sass = require('gulp-sass');

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});