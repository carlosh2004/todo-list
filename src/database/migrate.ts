import { PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

import config from '../config';
import postgres from 'postgres';

async function main() {
  const connectionString = config.DATABASE_URL;

  const pool = postgres(connectionString);

  const db: PostgresJsDatabase = drizzle(pool);

  await migrate(db, { migrationsFolder: 'drizzle' });
  console.log('[migrate] All migrations have been run, exiting...');
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
