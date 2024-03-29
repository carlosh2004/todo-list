import type { Config } from 'drizzle-kit';
import config from './src/config/index';

export default {
  schema: './src/api/**/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: config.DATABASE_URL,
  },
} satisfies Config;
