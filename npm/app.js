// const validator = require('validator');
const chalk = require('chalk');
// console.log(validator)
// const test = validator.isMobilePhone('089630958735', 'id-ID');
// console.log(test);

const error = chalk.bold.red('ERROR!!!');
const test = chalk`{bold.blue Bold Blue} {bgYellow.bold.upper Background Blue}`;
console.log(error);
console.log(test);
