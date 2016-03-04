var static = process.nanoshell.static;

module.exports = {
    styles: {
        source: static + '/source/styles/app.styl',
        dist: static + '/dist/app.css'
    },
    scripts: {
        source: static + '/source/scripts/app.js',
        dist: static + '/dist/app.js'
    }
};