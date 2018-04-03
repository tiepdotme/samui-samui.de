module.exports = function (grunt) {

    'use strict';

    // Default Task
    grunt.registerTask('default', [

        // preparing clean
        'clean:preparation',
        'clean:static',

        // doing stuff once at work flow start
        'create-versionfiles',

        // bump version
        'bump',
        'replace:version',

        // processing the dynamic parts once
        'process-javascripts',

        'exec:compileSass',
        'postcss',
        'cssmin',
        'copy:stylesheet',

        'exec:gitprocesschanges'

    ]);

};
