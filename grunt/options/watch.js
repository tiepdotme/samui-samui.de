/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 */
// deleting stuff
module.exports = {
    theme: {
        files: ['assets/wordpress/**/*'],
        tasks: [
            'copy-theme'
        ],
        options: {
            atBegin: true,
            interrupt: true
        }
    },
    javascripts: {
        files: ['assets/javascripts/**/*.js'],
        tasks: [
            'process-javascripts',
            'copy-theme'
        ],
        options: {
            atBegin: true,
            interrupt: true
        }

    },
    stylesheets: {
        files: ['assets/theme/**/*.scss'],
        tasks: [
            'process-style-theme',
            'process-style-build',
            'copy-theme'
        ],
        options: {
            atBegin: true,
            interrupt: true
        }

    },
    configFiles: {
        files: ['Gruntfile.js', 'grunt/**/*.js'],
        options: {
            reload: true
        }
    }

};
