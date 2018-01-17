import * as dotenv from 'dotenv';
import { name, version } from '../../package.json';

dotenv.config();

const isTestEnvironment = process.env.NODE_ENV === 'test';

export default {
  app: {
    name: name || 'typescript-express-api-starter',
    version: version || '1.0.0',
    port: parseInt(
      isTestEnvironment
        ? process.env.TEST_APP_PORT || '8888'
        : process.env.APP_PORT || '8000',
      10
    ),
    host: process.env.APP_HOST || '127.0.0.1'
  },
  database: {
    client: isTestEnvironment
      ? process.env.TEST_DB_CLIENT
      : process.env.DB_CLIENT || 'mssql',
    connection: {
      charset: 'utf8',
      user: isTestEnvironment ? process.env.TEST_DB_USER : process.env.DB_USER,
      port: isTestEnvironment ? process.env.TEST_DB_PORT : process.env.DB_PORT,
      database: isTestEnvironment
        ? process.env.TEST_DB_NAME
        : process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST || '127.0.0.1'
    },
    migrations: {
      tableName: 'migrations',
      directory: './migrations',
      stub: './stubs/migration.stub'
    },
    seeds: {
      directory: './seeds',
      stub: './stubs/seed.stub'
    }
  },
  pagination: {
    maxRows: 20,
    page: 1
  }
};
