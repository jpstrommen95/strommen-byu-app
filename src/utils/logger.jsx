import { createLogger, stdSerializers } from 'bunyan';

/**
 * Creates and configures a Bunyan logger instance.
 *
 * @module logger
 */

/**
 * Bunyan logger instance configured for the application.
 *
 * @type {bunyan}
 * @property {string} name - Name of the logger.
 * @property {string} level - Log level (can be 'fatal', 'error', 'warn', 'info', 'debug', 'trace').
 * @property {Object} serializers - Bunyan's standard serializers for common objects like Error.
 * @property {Array} streams - Streams for log output destinations.
 */
const logger = createLogger({
  name: 'strommen-byu-logger-app', // Name of the logger, change as appropriate
  level: 'info', // Log level (can be 'fatal', 'error', 'warn', 'info', 'debug', 'trace')
  serializers: stdSerializers, // support for common objects like Error
  streams: [
    {
      level: 'fatal',
      path: 'logs/fatal.log',
    },
    {
      level: 'error', // Log level for this stream
      path: 'logs/error.log', // Log errors to a file
    },
    {
      level: 'warn',
      path: 'logs/warn.log',
    },
    {
      level: 'info', // Log level for this stream
      path: 'logs/info.log',
      stream: process.stdout, // Log to the console
    },
    {
      level: 'debug',
      path: 'logs/debug.log',
    },
    {
      level: 'trace',
      path: 'logs/trace.log',
    },
  ],
});

export default logger;
