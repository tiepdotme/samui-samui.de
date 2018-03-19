/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 */
// @documentation https://www.npmjs.com/package/grunt-version
module.exports = {
    options: {
        pkg: 'package.json'
    },
    project: {
        options: {
            release: 'patch',
            flags: ''
        },
        src: ['package.json', 'composer.json']
    },
    phpfiles: {
        options: {
            prefix: '@version\\s*'
        },
        src: ['<%= setup.assets %>/wordpress/**/*.php']
    }

};
