var gulp = require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');
var rimraf = require('rimraf');
var runSequence = require('run-sequence');

var BUILD_DIR = __dirname + '/build/';

gulp.task('clean', function (cb) {
	return rimraf('build', cb);
});

gulp.task('deps-js', function () {
	gulp.src([
		'bower_components/bootstrap/dist/js/bootstrap.min.js',
	]).pipe(gulp.dest(BUILD_DIR + 'lib'));
});

gulp.task('deps-css', function () {
	gulp.src([
		'bower_components/bootstrap/dist/css/bootstrap.min.css',
	]).pipe(gulp.dest(BUILD_DIR + 'css'));
});

gulp.task('deps-fonts', function () {
	gulp.src([
		'bower_components/bootstrap/dist/fonts/**/*'
	]).pipe(gulp.dest(BUILD_DIR + 'fonts'));
});

gulp.task('src-html', function () {
	gulp.src('src/**/*.html')
		.pipe(gulp.dest(BUILD_DIR + 'html'))
		.pipe(connect.reload());
});

gulp.task('src-less', function () {
	gulp.src('src/less/main.less')
		.pipe(less())
		.pipe(gulp.dest(BUILD_DIR + 'css'))
		.pipe(connect.reload());
});

gulp.task('webserver', function () {
	connect.server({
		root: 'build/',
		livereload: true,
		port: 8000
	});
});

gulp.task('deps', ['deps-js', 'deps-css', 'deps-fonts']);
gulp.task('src', ['src-js']);

gulp.task('build', function (cb) {
	return runSequence('clean', ['deps'], cb);
});

gulp.task('develop', ['build'], function () {
	gulp.start('webserver');
});
