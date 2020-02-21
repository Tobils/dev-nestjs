import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto'

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService){}

    @Get()
    async getBooks(){
        const books = await this.booksService.getBooks();
        return books;
    }

    // dynamic routes
    @Get(':bookID')
    async getBook(@Param('bookID') bookID) {
        const book = await this.booksService.getBook(bookID);
        return book;
    }

    // menggunakan form
    @Post()
    async addBook(@Body() createBookDTO: CreateBookDTO) {
        const book = await this.booksService.addBook(createBookDTO);
        return book;
    }

    // menggunkan tanda tanya : {{url}}/books?bookID=1
    @Delete()
    async deleteBook(@Query() query) {
        const books = await this.booksService.deleteBook(query.bookID);
        console.log(query.bookID)
        return books; 
    }
}
