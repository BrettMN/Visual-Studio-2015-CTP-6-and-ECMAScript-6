 'use strict';

 var gulp = require('gulp'),
 	util = require('gulp-util'),
	concat = require('gulp-concat'),
 	less = require('gulp-less'),
 	minifyCss = require('gulp-minify-css'),
 	config = require('./gulp.config.js'),
 	babel = require('gulp-babel'),
	livereload = require('gulp-livereload');

// Build 
 gulp.task('build', ['html', 'babel', 'styles'], function () {
 	log('build')
 });

 gulp.task('watch', function () {
 	livereload.listen();
 	gulp.watch(config.src.index, ['html']);
 	gulp.watch(config.src.styles, ['styles']);
 	gulp.watch(config.src.js, ['babel']);
 });

 // Html 
 gulp.task('html', function () {
	log('html');
	del(config.dest.root + 'index.html');
	return gulp.src(config.src.index)
		.pipe(gulp.dest(config.dest.root));
 });

 // Js
 gulp.task('babel', function () {
 	log('babel');
 	del(config.dest.js + config.fileNames.js);
 	return gulp.src(config.src.js)
		.pipe(concat(config.fileNames.js))
 		.pipe(babel())
 		.pipe(gulp.dest(config.dest.js));
 });

 // Styles 
 gulp.task('styles', function () {
 	log('styles');
 	del(config.dest.css + config.fileNames.css);
 	gulp.src(config.src.styles)
		.pipe(concat(config.fileNames.css))
		.pipe(less())
 		.pipe(minifyCss({keepBreaks:false}))
 		.pipe(gulp.dest(config.dest.css));
 });

 // lazy tasks

 function del(file) {
 	var fs = require('fs');
 	fs.unlink(file, function (err) {
 		if (err) {
 			logErr(err);
 		}
 		log('Delete: ' + file);
 	});
 }

 function log(msg) {
 	util.log(util.colors.blue(msg));
 }

 function logErr(msg) {
 	util.log(util.colors.red(msg));
 }