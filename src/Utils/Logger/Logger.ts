import pino from 'pino';
import { ILogger } from './ILogger';
import { getAppConfiguration } from '../../AppConfiguration';

const configuration = getAppConfiguration();

const logger = pino({
    level: configuration.LoggerMinLevel,
});

const trace : (message: string) => void = (message) => {
    logger.trace(message);
};

const debug : (message: string) => void = (message) => {
    logger.debug(message);
};

const info : (message: string) => void = (message) => {
    logger.info(message);
};

const warn : (message: string) => void = (message) => {
    logger.warn(message);
};

const error : (message: string) => void = (message) => {
    logger.error(message);
};

const fatal : (message: string) => void = (message) => {
    logger.fatal(message);
};

export const Logger : ILogger = {
    trace,
    debug,
    info,
    warn,
    error,
    fatal,
}