/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 */
module.exports = {
    // @usedin create-versionfiles
    versioncssfile: {
        dst: '<%= setup.cssversionfile %>',
        content: '<%= grunt.template.today("yyyymmddhhss") %>'
    },
    // @usedin create-versionfiles
    versionjsfile: {
        dst: '<%= setup.jsversionfile %>',
        content: '<%= grunt.template.today("yyyymmddhhss") %>'
    }

};
