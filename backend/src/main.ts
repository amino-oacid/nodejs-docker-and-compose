import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { httpCorsMethods, httpLocalhost } from './constants';

const { PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = [
    `${httpLocalhost}:8081`,
    'http://a-rakhbari.nomorepartiessbs.ru',
    'https://a-rakhbari.nomorepartiessbs.ru',
  ];
  
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.enableCors({
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    methods: httpCorsMethods,
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true); // Временно разрешаем все для отладки
      }
    },
  });
  await app.listen(PORT);
}
bootstrap();
