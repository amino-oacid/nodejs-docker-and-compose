import { join } from 'path';

export default () => ({
  server_port: parseInt(process.env.PORT, 10),
  database: {
    type: process.env.DATABASE_TYPE,
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [join(__dirname, '/../**/*.entity.{js,ts}')],
    synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE),
  },
  jwt: {
    secret: process.env.JWT_SECRET_KEY,
    exp: process.env.JWT_TOKEN_TIME_LIMIT,
  }
});

