import { useParams } from 'react-router-dom';
import { usePosts } from '../ngu_canh/BaiVietContext';
import PostForm from '../components/PostForm';

const TrangChinhSua: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts, updatePost } = usePosts();

  const post = posts.find(p => p.id === id);

  if (!post) return <div style={{ padding: '20px' }}>Bài viết không tồn tại</div>;

  return <PostForm post={post} onSubmit={(updatedPost) => updatePost(id!, updatedPost)} isEdit />;
};

export default TrangChinhSua;