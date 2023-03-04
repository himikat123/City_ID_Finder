const gulp = require('gulp');
const inline = require('gulp-inline');
const uglify = require('gulp-uglify');
const minifyCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('inline', function() {
    return gulp.src('build/index.html')
        .pipe(inline({
            base: 'build/',
            js: function() {
                return uglify({
                    mangle: false
                });
            },
            css: [minifyCss({level: {1: {specialComments: 0}}}), autoprefixer],
        }))
        .pipe(gulp.dest('release')
    );
});

gulp.task('default', gulp.series(
    'inline'
));