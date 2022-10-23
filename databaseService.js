const chalk = require('chalk');
// eslint-disable-next-line prefer-destructuring
const log = console.log;

class DatabaseService {
  save(email, price, timestamp) {
    log(chalk.bold(`Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}, ${timestamp})`));
  }
}

module.exports = DatabaseService;
