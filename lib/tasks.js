var config = require('./config');

module.exports = {
    scripts: function () {
        return 'browserify -d ' + config.scripts.source + ' -o ' + config.scripts.dist;
    },
    styles: function () {
        return 'stylus --sourcemap-inline ' + config.styles.source + ' -o ' + config.styles.dist;
    }
};