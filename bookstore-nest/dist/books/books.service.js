"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const books_mock_1 = require("../mocks/books.mock");
let BooksService = class BooksService {
    constructor() {
        this.books = books_mock_1.BOOKS;
    }
    getBooks() {
        return new Promise(resolve => {
            resolve(this.books);
        });
    }
    getBook(bookID) {
        let id = Number(bookID);
        return new Promise(resolve => {
            const book = this.books.find(book => book.id === id);
            if (!book) {
                throw new common_1.HttpException("Book does not Exist !", 404);
            }
            resolve(book);
        });
    }
    addBook(book) {
        return new Promise(resolve => {
            this.books.push(book);
            resolve(this.books);
        });
    }
    deleteBook(bookID) {
        let id = Number(bookID);
        return new Promise(resolve => {
            let index = this.books.findIndex(book => book.id === id);
            if (index === -1) {
                throw new common_1.HttpException("Book does not exist !", 404);
            }
            this.books = this.books.slice(1, index);
            resolve(this.books);
        });
    }
};
BooksService = __decorate([
    common_1.Injectable()
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map