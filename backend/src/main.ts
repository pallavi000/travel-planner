import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1');
  await app.listen(3000);
}
bootstrap();
