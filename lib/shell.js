var child_process = require('child_process');
var colors = require('chalk');
var tasks = require('./tasks');

exports.printTasks = function(tasks) {
    console.log(colors.gray(''));
    console.log(colors.gray('Tasks'));
    console.log(colors.gray('-------------------'));

    for (var i = 0; i < Object.keys(tasks).length; i++) {
        var task = Object.keys(tasks)[i];
        console.log(colors.cyan(task));
    }
};

// execute a single shell command where "cmd" is a string
exports.exec = function(cmd, cb) {
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
};

// execute multiple commands in series
// this could be replaced by any flow control lib
exports.series = function(cmds, cb) {
    var execNext = function() {
        exports.exec(cmds.shift(), function(err) {
            if (err) {
                cb(err);
            } else {
                if (cmds.length) execNext();
                else cb(null);
            }
        });
    };
    execNext();
};
