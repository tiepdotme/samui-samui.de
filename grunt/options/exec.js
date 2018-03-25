/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 */
module.exports = {
    
    options: {
        stdout: false
    },

    gitprocesschanges: [
      "git add package.json ",
      "git add config.toml ",
      "git commit -m 'build: theme v<%= pkg.version %>' "
    ].join(' && '),

    hugo: 'hugo',

    compileSass: 'npm run-script css'

};
