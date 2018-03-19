// replace version with current version number
module.exports = {
    options: {

    },
    version: {
        files: [
            {
                src: [
                    'config.toml'
                ],
                dest: './',
                overwrite: true
            }
        ],
        patterns: [
            {
                match: /[0-9]{1,4}\.[0-9]{1,2}\.[0-9]{1,4}/,
                replacement: '<%= pkg.version %>'
            }
        ]
    },
    encoding: {
        files: [
            {
                expand: true,
                cwd: 'content',
                src: '**/*.md',
                dest: './content/',
                overwrite: true
            }
        ],
        patterns: [
            {
                match: /\&Auml\;/,
                replacement: 'Ä'
            },
            {
                match: /\&auml\;/,
                replacement: 'ä'
            },
            {
                match: /\&Ouml\;/,
                replacement: 'Ö'
            },
            {
                match: /\&ouml\;/,
                replacement: 'ö'
            },
            {
                match: /\&Uuml\;/,
                replacement: 'Ü'
            },
            {
                match: /&uuml;/,
                replacement: 'ü'
            },
            {
                match: /\&szlig\;/,
                replacement: 'ß'
            }
        ]
    }
};
