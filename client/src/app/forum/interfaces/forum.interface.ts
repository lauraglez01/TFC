export interface ForumPost {
  id: number;
  title: string;
  content: string;
  user_id: number;
  user?: User;
  created_at: string;
  comments?: ForumComment[];
}

export interface ForumComment {
  id: number;
  post_id: number;
  content: string;
  user_id: number;
  user?: User;
  created_at: string;
}

export interface User {
  id: number;
  name: string;
  email?: string;
}
