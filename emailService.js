const chalk = require('chalk');
// eslint-disable-next-line prefer-destructuring
const log = console.log;

class EmailService {
  send(email) {
    log(chalk.gray(`Sending email to ${email}`));
  }
}

module.exports = EmailService;
