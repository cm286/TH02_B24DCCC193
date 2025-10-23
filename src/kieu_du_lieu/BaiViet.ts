export interface Post {
  id: string;
  title: string;
  author: string;
  thumbnailUrl: string;
  content: string;
  category: string;
  date: string; // ISO string, ví dụ: "2023-10-01T00:00:00.000Z"
}