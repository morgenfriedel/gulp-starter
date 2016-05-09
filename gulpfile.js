var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sassGlob = require('gulp-sass-glob'),
	concat	= require('gulp-concat'),
	docready = require('./js/docready/wrapper'),
	resize = require('./js/resize/wrapper'),
	browserSync = require('browser-sync').create();

// The following are included in Node.js's standard
// library (with the exception of glob); but our
// .scss files and this gulpfile will use them.

var fs = require('fs'),
	path = require('path'),
	glob = require('glob');

// Configures watch task with Browsersync

gulp.task('serve', ['sass', 'js'], function() {

    browserSync.init({
        open: 'external',
		host: 'project.dev',
		proxy: 'project.dev',
		port: 3000,
        browser: ["google-chrome","firefox"]
    });

	// Watches the scss folder for all .scss and
	// .html files and updates browser automatically

    gulp.watch('./scss/**/*.{scss,sass}', ['sass']).on('change', browserSync.reload);
    gulp.watch('./js/**/*.js', ['js']).on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);

});

gulp.task('sass', function() {

// gulp.src locates the source files for the process. 
// This globbing function tells gulp to use all files 
// ending with .scss or .sass within the scss folder. 

 	gulp.src('./scss/**/*.{scss,sass}')
	 	// Converts Sass into CSS with Gulp Sass
	 	.pipe(sassGlob())
	 	.pipe(sass())
	 	// Logs compilation errors to console
	 	.on('error', sass.logError)
		// Runs autoprefixer on CSS where necessary
		.pipe(autoprefixer())
		.pipe(gulp.dest('css'))

});

gulp.task('js', function() {

	// Concat and wrap the document.ready() scripts
	gulp.src('./js/docready/docready.*.js')
		.pipe(concat('docready.js'))
		.pipe(docready())
		.pipe(gulp.dest('./js/gulped'));

	// Concat and wrap the window.resize() scripts
	gulp.src('./js/resize/resize.*.js')
		.pipe(concat('resize.js'))
		.pipe(resize())
		.pipe(gulp.dest('./js/gulped'));

	// Concats resulting scripts in the js directory
	gulp.src('./js/gulped/*.js')
		.pipe(concat('script.js'))
		.pipe(gulp.dest('./js'));

});

// Creating a default task
gulp.task('default', ['sass', 'js', 'serve']);
