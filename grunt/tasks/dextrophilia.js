/**
 * some custom tasks used in dextrophilia
 */
module.exports = function (grunt) {

    'use strict';

    grunt.registerMultiTask('writefile', 'write files.', function () {

        grunt.file.write(this.data.dst, this.data.content);
        grunt.log.writeln('written "' + this.target + '"');

    });

};
