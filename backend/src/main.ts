import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { httpCorsMethods, httpLocalhost } from './constants';

const { PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.enableCors({
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    methods: httpCorsMethods,
    origin: `${httpLocalhost}:${PORT}`,
  });
  await app.listen(PORT);
}
bootstrap();
