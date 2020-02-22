import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import * as dotenv from 'dotenv'
dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname,'..','public'))
  app.setBaseViewsDir(join(__dirname,'..','views'))
  app.setViewEngine('hbs')

  await app.listen(process.env.PORT, ()=> {
    console.log(`server running at port ${process.env.PORT}`)
  });
}
bootstrap();
