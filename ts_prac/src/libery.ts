type Book = {
    title: string;
    author: string;
    year: number;
    isRead: boolean;
};
function createBook(title: string, author: string, year: number): Book {
    return { title, author, year, isRead: false };
}

function markAsRead(book: Book): Book {
    return { ...book, isRead: true };
}

function getBookInfo(book: Book): string {
    const status = book.isRead ? "прочитана" : "не прочитана";
    return `«${book.title}», ${book.author}, ${book.year} — ${status}`;
}

function countReadBooks(books: Book[]): number {
    return books.filter(book => book.isRead).length;
}


export = {createBook, markAsRead, getBookInfo, countReadBooks}