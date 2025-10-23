import { useParams, useNavigate } from 'react-router-dom';
import { usePosts } from '../ngu_canh/BaiVietContext';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts, deletePost } = usePosts();
  const navigate = useNavigate();

  const post = posts.find(p => p.id === id);
  if (!post) return <div style={{ padding: '20px' }}>Bài viết không tồn tại</div>;

  const handleDelete = () => {
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      deletePost(post.id);
      navigate('/');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{post.title}</h1>
      <p><strong>Tác giả:</strong> {post.author}</p>
      <p><strong>Ngày đăng:</strong> {new Date(post.date).toLocaleDateString()}</p>
      <p><strong>Thể loại:</strong> {post.category}</p>
      <img src={post.thumbnailUrl} alt={post.title} style={{ width: '100%', maxWidth: '600px' }} />
      <p>{post.content}</p>
      <button onClick={() => navigate('/')} style={{ padding: '10px 20px', marginRight: '10px' }}>Quay lại</button>
      <button onClick={() => navigate(`/posts/edit/${post.id}`)} style={{ padding: '10px 20px', marginRight: '10px' }}>Chỉnh sửa</button>
      <button onClick={handleDelete} style={{ padding: '10px 20px' }}>Xóa bài viết</button>
    </div>
  );
};

export default PostDetail;