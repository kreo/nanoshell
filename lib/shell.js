var child_process = require('child_process');

exports.exec = function(cmd, cb){
    var parts = cmd.split(/\s+/g);
    var spawn = child_process.spawn(parts[0], parts.slice(1), {stdio: 'inherit'});
    spawn.on('exit', function(code){
        var err = null;
        if (code) {
            err = new Error('command "'+ cmd +'" exited with wrong status code "'+ code +'"');
            err.code = code;
            err.cmd = cmd;
        }
        if (cb) cb(err);
    });
};