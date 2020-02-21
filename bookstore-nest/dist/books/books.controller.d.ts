import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    getBooks(): Promise<any>;
    getBook(bookID: any): Promise<any>;
    addBook(createBookDTO: CreateBookDTO): Promise<any>;
    deleteBook(query: any): Promise<any>;
}
