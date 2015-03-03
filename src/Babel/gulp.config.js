(function config(){
	'use strict';
	var dest = 'wwwroot/',
		jsDest = dest + 'js/',
		cssDest = dest + 'css/',
		index = 'index.html',
		assests = 'assets/',
		index = assests + index,
		srcStyle = assests + 'css/site.less',
		srcJs = assests + 'js/app.es6';

	var config = {
		dest:{
			root:dest,
			js:jsDest,
			css:cssDest
		},
		src: {
			index: index,
			assets: assests,
			styles: srcStyle,
			js: srcJs
		},
		fileNames: {
			index: index,
			js: 'app.js',
			css: 'site.css'
		}
	}
	module.exports = config;
})();