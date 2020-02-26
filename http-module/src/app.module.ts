import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesService } from './services/quotes/quotes.service';
import { MessageController } from './message/message.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, MessageController],
  providers: [AppService, QuotesService],
})
export class AppModule {}
