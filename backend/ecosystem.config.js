require('dotenv').config({ path: '.env' });

module.exports = {
  apps: [{
    name: 'backend',
    script: 'dist/main.js',
    env: {
      NODE_ENV: 'production',
      PORT: process.env.PORT,
      POSTGRES_HOST: process.env.POSTGRES_HOST,
      POSTGRES_PORT: process.env.POSTGRES_PORT,
      POSTGRES_USER: process.env.POSTGRES_USER,
      POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
      POSTGRES_DB: process.env.POSTGRES_DB,
      JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
      JWT_TOKEN_TIME_LIMIT: process.env.JWT_TOKEN_TIME_LIMIT,
      DATABASE_TYPE: process.env.DATABASE_TYPE,
      DATABASE_SYNCHRONIZE: process.env.DATABASE_SYNCHRONIZE,
      POSTGRES_PGDATA: process.env.POSTGRES_PGDATA,
    },
  }]
};
