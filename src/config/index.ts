import 'dotenv/config';

const config = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL as string,
};

export default config;
