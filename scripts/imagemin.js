const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
	const files = await imagemin(['public/**/*.{jpg,png}'], 'public/', {
		plugins: [
			imageminJpegtran(
				progressive: true
			),
			imageminPngquant({
				quality: [0.6, 0.8]
			})
		]
	});

	//console.log(files);
	//=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
})();