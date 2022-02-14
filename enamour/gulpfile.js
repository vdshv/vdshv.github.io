var syntax         = 'scss', // Syntax: sass or scss;
	gulpVersion    = '4'; // Gulp version: 3 or 4
		// gmWatch        = false; // ON/OFF GraphicsMagick watching "img/_src" folder (true/false). Linux install gm: sudo apt update; sudo apt install graphicsmagick

var gulp          = require('gulp'),
		gutil         = require('gulp-util' ),
		sass          = require('gulp-sass'),
		browserSync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		// uglify        = require('gulp-uglify'),
		terser 		  = require('gulp-terser'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require('gulp-notify'),
		rsync         = require('gulp-rsync'),
		imageResize   = require('gulp-image-resize'),
		imagemin      = require('gulp-imagemin'),
		del           = require('del'),
		htmlmin = require('gulp-htmlmin');

// Local Server
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	})
});

// Sass|Scss Styles
gulp.task('styles', function() {
	return gulp.src('app/'+syntax+'/**/*.'+syntax+'')
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream())
});

// JS
gulp.task('scripts', function() {
	return gulp.src([
		'app/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.js'))
	.pipe(terser()) // Mifify js (opt.)

	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({ stream: true }))
});

// HTML Live Reload
gulp.task('code', function() {
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({ stream: true }))
});


// Compress and serve HTML
gulp.task('compress-html', function() {
  return gulp.src('app/*.html')
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(gulp.dest('dist'));
});


// Serve img
gulp.task('serve-img', function() {
  return gulp.src('app/img/**/*')
  .pipe(gulp.dest('dist/img'));
});


// Serve css
gulp.task('serve-css', function() {
  return gulp.src('app/css/*.css')
  .pipe(gulp.dest('dist/css'));
});

// Serve fonts
gulp.task('serve-fonts', function() {
  return gulp.src('app/fonts/*')
  .pipe(gulp.dest('dist/fonts'));
});

// Serve js
gulp.task('serve-js', function() {
  return gulp.src('app/js/scripts.js')
  .pipe(gulp.dest('dist/js'));
});


gulp.task('watch', function() {
	gulp.watch('app/'+syntax+'/**/*.'+syntax+'', gulp.parallel('styles'));
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], gulp.parallel('scripts'));
	gulp.watch('app/*.html', gulp.parallel('code'));
	// gmWatch && gulp.watch('app/img/_src/**/*', gulp.parallel('img')); // GraphicsMagick watching image sources if allowed.
});

gulp.task('dist', gulp.parallel('compress-html', 'serve-img', 'serve-css', 'serve-fonts', 'serve-js'));

gulp.task('default', gulp.parallel('styles', 'scripts', 'browser-sync', 'watch'));

