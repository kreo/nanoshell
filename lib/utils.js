var colors = require('chalk');

module.exports = {
    printTasks: function (tasks) {
        console.log(colors.gray(''));
        console.log(colors.gray('Tasks'));
        console.log(colors.gray('-------------------'));

        for (var i = 0; i < Object.keys(tasks).length; i++) {
            var task = Object.keys(tasks)[i];
            console.log(colors.cyan(task));
        }
    }
};