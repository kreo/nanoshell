// ---------------------------------------------
//  nanoshell
//  author: @kreo
//
//  Licensed under the MIT License
//  http://opensource.org/licenses/MIT
// ---------------------------------------------

var nanoshell = (function () {

    var child_process = require('child_process'),
        config = require('./lib/config'),
        tasks = require('./lib/tasks'),
        utils = require('./lib/utils');

    function exec(cmd, cb) {
        var parts = cmd.split(/\s+/g);
        var spawn = child_process.spawn(parts[0], parts.slice(1), { stdio: 'inherit' });
        spawn.on('exit', function(code) {
            var err = null;
            if (code) {
                err = new Error('command "' + cmd + '" exited with wrong status code "' + code + '"');
                err.code = code;
                err.cmd = cmd;
            }
            if (cb) cb(err);
        });
    }

    function run(argv) {
        argv.forEach(function(val, index) {
            var task = tasks[val];
            if (task !== undefined) exec(task());
            else if (val === 'list') utils.printTasks(tasks);
        });
    }

    var init = function() {
        run(process.argv);
    }

    return {
        init: init()
    }

})();

module.exports = nanoshell;
