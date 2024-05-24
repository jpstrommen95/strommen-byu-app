const { createLogger, stdSerializers } = require('bunyan');

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
      level: 'info', // Log level for this stream
      stream: process.stdout, // Log to the console
    },
    {
      level: 'error', // Log level for this stream
      path: 'error.log', // Log errors to a file
    },
  ],
});

module.exports = logger;
