const winston = require("winston");
require("winston-daily-rotate-file");

const transport = new winston.transports.DailyRotateFile({
  filename: "logs/app-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  maxFiles: "14d"
});

module.exports = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    transport,
    new winston.transports.Console()
  ]
});
