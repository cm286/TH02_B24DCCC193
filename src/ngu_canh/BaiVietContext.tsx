import React, { createContext, useContext, useState } from 'react';
import { Post } from '../kieu_du_lieu/BaiViet';
import { posts as initialPosts } from '../du_lieu_mau/dsBaiVietMau';

interface PostContextType {
  posts: Post[];
  addPost: (post: Omit<Post, 'id' | 'date'>) => void;
  updatePost: (id: string, post: Omit<Post, 'id' | 'date'>) => void;
  deletePost: (id: string) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error('usePosts must be used within PostProvider');
  return context;
};

export const PostProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const addPost = (post: Omit<Post, 'id' | 'date'>) => {
    const newPost: Post = {
      ...post,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    setPosts([...posts, newPost]);
  };

  const updatePost = (id: string, updatedPost: Omit<Post, 'id' | 'date'>) => {
    setPosts(posts.map(p => p.id === id ? { ...p, ...updatedPost } : p));
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <PostContext.Provider value={{ posts, addPost, updatePost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};