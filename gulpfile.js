var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');
var babel = require('gulp-babel');

gulp.task('clean', function () {
    return del.sync('./build');
});

gulp.task('less', function () {
    return gulp.src('./src/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('./build/styles'));
});

gulp.task('copy', ['copy:html', 'copy:images']);
gulp.task('copy:html', function () {
    return gulp
        .src('./src/index.html')
        .pipe(gulp.dest('./build'))
});
gulp.task('copy:images', function () {
    return gulp
        .src('./src/images/*')
        .pipe(gulp.dest('./build/images'))
});

gulp.task('babel', function () {
    return gulp.src('src/scripts/*.js')
        .pipe(babel())
        .pipe(gulp.dest('build/scripts'));
});

gulp.task('default', ['clean', 'less', 'copy', 'babel']);