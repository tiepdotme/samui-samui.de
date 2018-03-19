module.exports = function(grunt) {

    'use strict';

    // creating version files for all css, js, font processes
    grunt.registerTask('create-versionfiles', [

        'writefile:versioncssfile',
        'writefile:versionjsfile',
        'writefile:tmpheader'

    ]);

};
