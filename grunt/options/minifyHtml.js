module.exports = {

	options: {
		
	},
	dist: {
		files: [{
			expand: true,
			cwd:  'dist',
			src: '**/*.html',
			dest: 'dist'
		}]
	}
};
