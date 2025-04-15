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