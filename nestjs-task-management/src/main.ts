import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv'
dotenv.config()

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  logger.log(`application listening on port ${process.env.PORT}`)
}
bootstrap();
