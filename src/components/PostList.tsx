import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../ngu_canh/BaiVietContext';
import PostCard from './PostCard';

const PostList: React.FC = () => {
  const { posts, deletePost } = usePosts();
  const [filter, setFilter] = useState('');

  const filteredPosts = posts.filter(p => p.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div style={{ padding: '20px' }}>
      <h1>Tổng số bài viết: {posts.length}</h1>
      <Link to="/create" style={{ marginBottom: '20px', display: 'inline-block' }}>Viết bài mới</Link>
      <input
        type="text"
        placeholder="Filter theo tiêu đề"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        style={{ marginBottom: '20px', width: '100%', padding: '10px' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {filteredPosts.map(post => (
          <PostCard key={post.id} post={post} onDelete={deletePost} />
        ))}
      </div>
    </div>
  );
};

export default PostList;