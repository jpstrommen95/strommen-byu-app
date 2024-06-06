import bunyan from 'bunyan';

const logger = bunyan.createLogger({
  name: '@strommen-byu/core/logger',
  level: 'info',
  streams: [
    {
      level: 'debug',
      path: 'logs/debug.log',
    },
    {
      level: 'error',
      path: 'logs/error.log',
    },
    {
      level: 'info',
      path: 'logs/info.log',
    },
    {
      level: 'trace',
      path: 'logs/trace.log',
    },
    {
      level: 'warn',
      path: 'logs/warn.log',
    },
    {
      level: 'fatal',
      path: 'logs/fatal.log',
    },
  ],
});

export default logger;
