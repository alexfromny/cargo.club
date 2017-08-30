var gulp = require('gulp'),
    sass = require('gulp-sass'),
    path = require('path'),
    copy = function (source, destination) {
        return gulp.src(source)
            .pipe(gulp.dest(destination));
    };

gulp.task('css', function () {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch:css', function () {
    gulp.watch('./sass/**/*.scss', ['css']);
});

gulp.task('watch', ['watch:css']);
gulp.task('build', ['css']);


gulp.task('default', ['build'], function () {
    gulp.start('watch');
});
