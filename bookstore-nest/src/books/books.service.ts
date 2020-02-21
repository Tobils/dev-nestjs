import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from '../mocks/books.mock';



@Injectable()
export class BooksService {
    books = BOOKS;

    // retrieve the list of books 
    getBooks(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.books)
        })
    } 

    // fetch one book using bookID
    getBook(bookID): Promise<any> {
        let id = Number(bookID)
        return new Promise(resolve => {
            const book = this.books.find(book => book.id === id);
            if(!book) {
                throw new HttpException("Book does not Exist !", 404)
            }
            resolve(book)
        })
    }

    // push new book to existing list
    addBook(book): Promise<any> {
        return new Promise(resolve => {
            this.books.push(book);
            resolve(this.books)
        })
    }

    // delete book using bookID
    deleteBook(bookID): Promise<any> {
        let id = Number(bookID)
        
        return new Promise(resolve => {
            let index = this.books.findIndex(book => book.id === id);
            if(index === -1){
                throw new HttpException("Book does not exist !", 404);
            }
            this.books = this.books.slice(1, index); 
            resolve(this.books)
        })
    }

}
