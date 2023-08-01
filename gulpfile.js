const gulp = require('gulp');
const inline = require('gulp-inline');
const uglify = require('gulp-uglify');
const minifyCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const zip = require('gulp-zip');
const clean = require('gulp-clean');

gulp.task('inline', function() {
    return gulp.src('./build/index.html')
        .pipe(inline({
            base: './build/',
            js: function() {
                return uglify({
                    mangle: false
                });
            },
            css: [minifyCss({level: {1: {specialComments: 0}}}), autoprefixer],
        }))
        .pipe(gulp.dest('./release')
    );
});

gulp.task('rename', function() {
    return gulp.src("./release/index.html", { base: process.cwd() })
        .pipe(rename({
            dirname: "",
            basename: "City_ID_Finder",
            extname: ".html"
        }))
        .pipe(gulp.dest("./release"));
});

gulp.task('zip', function() {
	return gulp.src('./release/City_ID_Finder.html')
		.pipe(zip('City_ID_Finder.zip'))
		.pipe(gulp.dest('./release'))
    }
);

gulp.task('delete', function() {
    return gulp.src('./release/*.html', {read: false})
        .pipe(clean())
});

gulp.task('default', gulp.series(
    'inline', 'rename', 'zip', 'delete'
));