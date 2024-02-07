import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { PORT } from 'utils/constant';
import { AppModule } from './app.module';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1');
  await app.listen(PORT);
}
bootstrap();
