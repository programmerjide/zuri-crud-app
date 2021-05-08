const winston = require('winston');
const path = require('path')

const myFormat = winston.format.printf(info => `${info.timestamp} - ${info.level}: ${info.message}`);

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.timestamp(),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        myFormat,
      )
    }),
    new winston.transports.File({
      filename: path.resolve('error.log'),
      format: myFormat,
    }),
  ],
  exceptionHandlers: [
      new winston.transports.File({
          filename: path.resolve('exceptions.log'),
          format: myFormat,
      })
  ]
});


module.exports = logger;