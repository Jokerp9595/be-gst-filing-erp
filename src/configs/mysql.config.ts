import mysql, { Pool, PoolOptions } from 'mysql2';
import { applicationLogger, configuration } from './';

const createPool = (region: any, options: PoolOptions): Pool => {
    const pool = mysql.createPool(options);

    pool.getConnection((err) => {
        if (err) {
            applicationLogger.error(`DB connection ${region} error`, { err: err.toString() });
        }
    });

    pool.on('connection', (conn) => {
        conn.query("SET SESSION wait_timeout=600");
        conn.query("SET SESSION interactive_timeout=600");
    });

    return pool;
};

export const connection = createPool('default', {
    host: configuration.dbOptions.host,
    port: parseInt(configuration.dbOptions.port, 10),
    user: configuration.dbOptions.user,
    password: configuration.dbOptions.pass,
    database: configuration.dbOptions.database,
    debug: false,
    multipleStatements: true,
    timezone: '+00:00',
    connectTimeout: 20000,
    connectionLimit: 10,
});