/**
 * @file configures the logger, currently uses winston
 */
import {createLogger, format, transports} from 'winston';

const consoleLogger = new transports.Console({
  format: format.combine(
      format.colorize(),
      format.splat(), // optional for log interpolation using util.format
      format.simple(),
  ),
});

// This method set the current severity based on the current NODE_ENV
// show all the log levels if the server was run in development mode;
// otherwise, if it was run in production, show only warn and error messages.
const level = () => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

const logger = createLogger({
  level: level(),
  transports: [
    consoleLogger,
  ],
});

logger.info('logger is setup ' +
  `NODE_ENV[${process.env.NODE_ENV}],` +
  `LOG_LEVEL[${level()}]`);

export default logger;
