/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 * @documentation https://github.com/gruntjs/grunt-contrib-imagemin
 */
module.exports = {

    default: {
        files: [{
                expand: true,
                cwd: './static/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: './static/images/'
            }],
        options: {
            optimizationLevel: 7
        }
    },
    wpupload: {
        files: [{
                expand: true,
                cwd: './static/wp-content/',
                src: ['**/*.{png,jpg,gif}'],
                dest: './static/wp-content/'
            }],
        options: {
            optimizationLevel: 7
        }
    },
    assets: {
        files: [{
                expand: true,
                cwd: './static/assets/',
                src: ['**/*.{png,jpg,gif}'],
                dest: './static/assets/'
            }],
        options: {
            optimizationLevel: 7
        }
    }
};
