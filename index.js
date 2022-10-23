const chalk = require('chalk');
// eslint-disable-next-line prefer-destructuring
const log = console.log;

const TicketManager = require('./ticketManager');
const EmailService = require('./emailService');
const DatabaseService = require('./databaseService');

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on('buy', (email, price, timestamp) => {
  emailService.send(email);
  databaseService.save(email, price, timestamp);
});

ticketManager.on('error', (error) => {
  console.error(`Gracefully handling our error: ${error}`);
});

/*
ticketManager.buy('test@email.com', 10);
ticketManager.buy('test@email.com', 10);
ticketManager.buy('test@email.com', 10);
ticketManager.buy('test@email.com', 10);
*/

log(chalk.underline(`We have ${ticketManager.listenerCount('buy')} listener(s) for the buy event`));
log(chalk.bgGreen(`We have ${ticketManager.listenerCount('error')} listener(s) for the error event`));

const onBuy = () => {
  log(chalk.yellow('I will be removed soon'));
};

ticketManager.on('buy', onBuy);

log(chalk.bold(`We added a new event listener bringing our total count for the buy event to: ${ticketManager.listenerCount('buy')}`));
ticketManager.buy('test@email', 20);

ticketManager.off('buy', onBuy);

log(chalk.blue(`We now have: ${ticketManager.listenerCount('buy')} listener(s) for the buy event`));
ticketManager.buy('test@email', 20);

ticketManager.removeAllListeners('buy');
log(chalk.green(`We have ${ticketManager.listenerCount('buy')} listeners for the buy event`));
ticketManager.buy('test@email', 20);
log(chalk.cyan('The last ticket was bought'));
