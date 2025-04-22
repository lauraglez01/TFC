export interface Book {
    id: number;
    title: string;
    author: string;
    country: string;
    description: string;
    published_year: number;
    categories: Category[];
    isbn: string;
    cover: string;
}  
export interface Category {
    id: number;
    name: string;
}

export interface Reading {
    id: number;
    user_id: number;
    book_id: number;
    status: string;
    started_at: string;
    finished_at: string;
    book: Book;
  }