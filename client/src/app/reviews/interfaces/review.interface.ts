export interface Review {
    id?: number;
    book_id: number;
    user_id?: number;
    rating: number;
    comment: string;
    created_at?: string;
    updated_at?: string;
    user: User;
}
export interface User {
    id: number;
    name: string;
    email?: string;
  }