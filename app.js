const chalk = require('chalk');

// eslint-disable-next-line prefer-destructuring
const log = console.log;

// Basic colors
log(chalk.blue('Hey,this is color blue!'));
log(chalk.yellow('Hi,yellow babes!'));
log(chalk.white('Are you clean as white?'));

// background colors
log(chalk.bgGray('It is gray and not grey.'));
log(chalk.bgGreen('It is green and not greene.'));
log(chalk.bgCyanBright('Ever heard of cyan bright before?'));

// Styling and decoration
log(chalk.bold('Be bold as a lion'));
log(chalk.underline('Make sure you underline the texts'));

// chaining
log(chalk.red.bgCyan.underline('Take note of this.'));
log(chalk.green.bgGray.bold('fix your eyes here!'));

// Hex & RGB
log(chalk.hex('#0000ff').bold('lets see what comes out'));
log(chalk.rgb(50, 150, 20).bold('Guess what we are going to get'));
