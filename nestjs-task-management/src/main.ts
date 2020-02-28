import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv'
dotenv.config()

import * as config from 'config';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const serverConfig = config.get('server')
  console.log(serverConfig);
  
  const app = await NestFactory.create(AppModule);
  // await app.listen(process.env.PORT);
  await app.listen(serverConfig.PORT);
 
  logger.log(`application listening on port ${process.env.PORT}`) 
}
bootstrap();
