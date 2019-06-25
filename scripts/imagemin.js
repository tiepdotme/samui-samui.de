const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
	const files = await imagemin(['public/**/*.{jpg,jpeg,png}'], 'public/', {
		plugins: [
			imageminJpegtran(),
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
	//=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
})();