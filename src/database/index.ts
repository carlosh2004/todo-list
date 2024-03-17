import { PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import config from '../config';

if (!config.DATABASE_URL) {
  throw new Error('Database credentials missing.');
}

const connectionString = config.DATABASE_URL;

const pool = postgres(connectionString);

export const db: PostgresJsDatabase = drizzle(pool);
