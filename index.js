// ---------------------------------------------
//  nanoshell
//  author: @kreo
//
//  Licensed under the MIT License
//  http://opensource.org/licenses/MIT
// ---------------------------------------------

var nanoshell = (function() {

    var shell = require('./lib/shell');
    var config = require('./lib/config');
    var tasks = require('./lib/tasks');

    function run(argv) {
        argv.forEach(function(val, index) {
            var callstack = [];
            var task = tasks[val];
            if (task !== undefined) {
                callstack.push(task());
                shell.series(callstack, function(err) {
                    if (err) {
                        console.log(err);
                    }
                });
            } else if (val === 'list') {
                shell.printTasks(tasks);
            }
        })
    }

    function init() {
        run(process.argv);
    }

    return {
        init: init()
    }

})();

module.exports = nanoshell;