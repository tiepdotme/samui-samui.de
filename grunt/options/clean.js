/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 */
// deleting stuff
module.exports = {
    // initial cleanup of assets
    // @usedin default
    preparation: [
        '<%= setup.temp %>'
    ],
    // cleanup of created stylesheets
    // @usedin process-stylesheets
    static: [
        'static/assets/css/*.css',
        'static/assets/js/*.js'
    ],
    // cleanup of created javascripts
    // @usedin process-javascripts
    javascripts: [
        '<%= setup.theme %>/script*.js'
    ],

    // clean theme directory and cache
    theme: [
        '<%= setup.app %>/wp-content/themes/wp-tropicalisland',
        '<%= setup.app %>/wp-content/imagecache',
        '<%= setup.app %>/wp-content/cache',
        '<%= setup.app %>/wp-content/updraft/*.txt',
        '<%= setup.app %>/wp-content/updraft/*.gz',
        '<%= setup.app %>/wp-content/updraft'
    ],

    // clean debug log (prepare for staging)
    debug: [
        '<%= setup.app>/wp-content/debug.log'
    ],

    // clean built files that are useless
    unused: [
        'dist/page',
        'dist/sitewide',
        'dist/post'
    ],
    
    // complete cleanup of all non-repository files
    // @usedin only per direct call
    global: [
        '<%= setup.cleanfiles %>'
    ]

};
