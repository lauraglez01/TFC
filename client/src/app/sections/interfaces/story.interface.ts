export interface Story {
    id: number;
    title: string;
    description: string;
    image?: string;
    file?: string;
    user_id: number;
    status: 'draft' | 'published';
    created_at: string;
    updated_at: string;
}