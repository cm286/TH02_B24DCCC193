import { Link, useNavigate } from 'react-router-dom';
import { Post } from '../kieu_du_lieu/BaiViet';

interface PostCardProps {
  post: Post;
  onDelete: (id: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      onDelete(post.id);
    }
  };

  const handleEdit = () => {
    navigate(`/posts/edit/${post.id}`);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <img
        src={post.thumbnailUrl}
        alt={post.title}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <h3>{post.title}</h3>
      <p><strong>Tác giả:</strong> {post.author}</p>
      <p><strong>Ngày đăng:</strong> {new Date(post.date).toLocaleDateString()}</p>
      <p>{post.content.substring(0, 100)}...</p>

      {}
      <div style={{ marginTop: '10px' }}>
        <Link to={`/posts/${post.id}`} style={{ marginRight: '10px' }}>Đọc thêm</Link>
        <button onClick={handleEdit} style={{ marginRight: '10px' }}>Chỉnh sửa</button>
        <button onClick={handleDelete}>Xóa</button>
      </div>
    </div>
  );
};

export default PostCard;
