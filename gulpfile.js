var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var sassGlob = require('gulp-sass-glob');

// The following are included in Node.js's standard
// library (npm isn't required to get them); but our
// .scss files and this gulpfile will use them.

var fs = require('fs');
var path = require('path');
var glob = require('glob');

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

gulp.task('watch', function() {

  // Watches the scss folder for all .scss and .sass files
  // If any file changes, run the sass task

  gulp.watch('./scss/**/*.{scss,sass}', ['sass'])

});

// Creating a default task
gulp.task('default', ['sass', 'watch']);