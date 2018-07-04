module.exports = function (grunt) {

    'use strict';

    // Default Task
    grunt.registerTask('build', [

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

        // letting hugo do what ever it does best
        'exec:hugo',

        // removing stuff
        'clean:unused',

        // minify stuff
        'minifyHtml'

    ]);

};
