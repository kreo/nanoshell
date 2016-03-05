var shell = require('./lib/shell'),
    tasks = require('./lib/tasks'),
    utils = require('./lib/utils');

function run(argv) {
    argv.forEach(function(val, index) {
        var task = tasks[val];
        if (task !== undefined) {
            shell.exec(task());
        }
    });
}

var init = function() {
    run(process.argv);
}

module.exports = init();
