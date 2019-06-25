const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
	const files = await imagemin(['public/**/*.{jpg,jpeg,png}'], 'public/', {
		plugins: [
			imageminMozjpeg({
				quality: 75
			}),
			imageminPngquant({
				quality: [0.6, 0.8],
				speed: 1,
				strip: true
			})
		]
	});

	//console.log(files);
	//=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
})();