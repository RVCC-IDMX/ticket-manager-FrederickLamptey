const chalk = require('chalk');
const { EventEmitter } = require('events');

// eslint-disable-next-line prefer-destructuring
const log = console.log;
const emitter = new EventEmitter();

emitter.emit('My first event');
