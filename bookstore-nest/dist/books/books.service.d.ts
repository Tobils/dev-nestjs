export declare class BooksService {
    books: {
        id: number;
        title: string;
        description: string;
        author: string;
    }[];
    getBooks(): Promise<any>;
    getBook(bookID: any): Promise<any>;
    addBook(book: any): Promise<any>;
    deleteBook(bookID: any): Promise<any>;
}
