import moment from 'moment';
import { createLogger, format, transports, config } from 'winston';
const { combine, timestamp, json } = format;

const newFilename = moment().format("DD-MM-YYYY");

export const applicationLogger = createLogger({
    levels: config.syslog.levels,
    format: combine(
        timestamp({
            format: 'HH:mm:ss'
        }),
        json({
            space: 2
        })
    ),
    transports: [
        new transports.File({
            filename: './public/logs/' + newFilename + '.log'
        })
    ]
});