var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	sassGlob = require('gulp-sass-glob'),
	browserSync = require('browser-sync').create();

// The following are included in Node.js's standard
// library (npm isn't required to get them); but our
// .scss files and this gulpfile will use them.

var fs = require('fs'),
	path = require('path'),
	glob = require('glob');

// Configures watch task with Browsersync

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        open: 'external',
		host: 'project.dev',
		proxy: 'project.dev',
		port: 3000,
        browser: ["google-chrome","firefox"]
    });

	// Watches the scss folder for all .scss and
	// .html files and updates browser automatically

    gulp.watch('./scss/**/*.{scss,sass}', ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);

});

gulp.task('sass', function() {

// gulp.src locates the source files for the process. 
// This globbing function tells gulp to use all files 
// ending with .scss or .sass within the scss folder. 

 	gulp.src('./scss/**/*.{scss,sass}')
 		// Initializes sourcemaps
 		.pipe(sourcemaps.init())
	 	// Converts Sass into CSS with Gulp Sass
	 	.pipe(sassGlob())
	 	.pipe(sass())
	 	// Logs compilation errors to console
	 	.on('error', sass.logError)
		// Runs autoprefixer on CSS where necessary
		.pipe(autoprefixer())
		// Writes sourcemaps into the CSS file
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css'))

});

// Creating a default task
gulp.task('default', ['sass', 'serve']);