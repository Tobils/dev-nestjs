import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { QuotesService } from 'src/services/quotes/quotes.service';
import { CredentialDto } from './dto/credential.dto'

@Controller('message')
export class MessageController {
    constructor(private quoteService: QuotesService){}

    @Post('auth')
    getMessages(@Body() credentialDto: CredentialDto){
        return this.quoteService.auth(credentialDto);
    }

    @Get(':id')
    getMessage(@Param('id')id : string){
        return this.quoteService.getQuote(id)
    }

    @Get()
    getMessageRandom(){
        return this.quoteService.getRandomQuote()
    }

}
