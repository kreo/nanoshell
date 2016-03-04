var shell = require('./lib/shell');
var tasks = require('./lib/tasks');
var utils = require('./lib/utils');

var init = function () {

    process.argv.forEach(function (val, index) {
        switch (val) {
            case 'styles':
                shell.exec(tasks.styles());
                break;

            case 'scripts':
                shell.exec(tasks.scripts());
                break;

            case 'static':
                shell.exec(tasks.styles());
                shell.exec(tasks.scripts());

            case 'list':
                utils.printTasks(tasks);

            default:
                break;
        }
    });

    console.log('entra 2');
}

module.exports = init();