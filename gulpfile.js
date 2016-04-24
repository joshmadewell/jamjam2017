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
		'bower_components/jquery/dist/jquery.min.js',
		'src/lib/materialize.js'
	]).pipe(gulp.dest(BUILD_DIR + 'lib'));
});

gulp.task('deps-css', function () {
	gulp.src([
		'src/lib/materialize.css'
	]).pipe(gulp.dest(BUILD_DIR + 'css'));
});

gulp.task('deps-fonts', function () {
	gulp.src([
		'bower_components/Materialize/dist/font/**/*'
	]).pipe(gulp.dest(BUILD_DIR + 'font'));
});

gulp.task('src-html', function () {
	gulp.src('src/**/*.html')
		.pipe(gulp.dest(BUILD_DIR))
		.pipe(connect.reload());
});

gulp.task('src-less', function () {
	gulp.src('src/less/main.less')
		.pipe(less())
		.pipe(gulp.dest(BUILD_DIR + 'css'))
		.pipe(connect.reload());
});

gulp.task('src-img', function () {
	gulp.src('src/images/**/*')
		.pipe(gulp.dest(BUILD_DIR + 'assets'))
		.pipe(connect.reload());
});

gulp.task('src-js', function () {
	gulp.src('src/js/**/*')
		.pipe(gulp.dest(BUILD_DIR + 'js'))
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
gulp.task('src', ['src-html', 'src-less', 'src-img', 'src-js']);

gulp.task('build', function (cb) {
	return runSequence('clean', ['deps', 'src'], cb);
});

gulp.task('develop', ['build'], function () {
	gulp.start('webserver');
	gulp.watch('src/**/*.html', ['src-html']);
	gulp.watch('src/**/*.less', ['src-less']);
	gulp.watch('src/**/*.js', ['src-js']);
});
