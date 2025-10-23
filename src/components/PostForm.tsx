import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Post } from '../kieu_du_lieu/BaiViet';

interface PostFormProps {
  post?: Post;
  onSubmit: (post: Omit<Post, 'id' | 'date'>) => void;
  isEdit?: boolean;
}

const PostForm: React.FC<PostFormProps> = ({ post, onSubmit, isEdit = false }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [author, setAuthor] = useState(post?.author || '');
  const [thumbnailUrl, setThumbnailUrl] = useState(post?.thumbnailUrl || '');
  const [content, setContent] = useState(post?.content || '');
  const [category, setCategory] = useState(post?.category || 'Khác');
  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setAuthor(post.author);
      setThumbnailUrl(post.thumbnailUrl);
      setContent(post.content);
      setCategory(post.category);
    }
  }, [post]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.length < 10 || author.length < 3 || content.length < 50) {
      alert('Tiêu đề ít nhất 10 ký tự, Tác giả ít nhất 3 ký tự, Nội dung ít nhất 50 ký tự');
      return;
    }
    onSubmit({ title, author, thumbnailUrl, content, category });
    alert(isEdit ? 'Cập nhật thành công!' : 'Đăng bài thành công!');
    navigate(isEdit ? `/posts/${post?.id}` : '/');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Tiêu đề (ít nhất 10 ký tự)"
        required
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <input
        type="text"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        placeholder="Tác giả (ít nhất 3 ký tự)"
        required
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <input
        type="text"
        value={thumbnailUrl}
        onChange={e => setThumbnailUrl(e.target.value)}
        placeholder="URL ảnh thumbnail"
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Nội dung bài viết (ít nhất 50 ký tự, ít nhất 10 dòng)"
        rows={10}
        required
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      >
        <option value="Công nghệ">Công nghệ</option>
        <option value="Du lịch">Du lịch</option>
        <option value="Ẩm thực">Ẩm thực</option>
        <option value="Đời sống">Đời sống</option>
        <option value="Khác">Khác</option>
      </select>
      <button type="submit" style={{ padding: '10px 20px', marginRight: '10px' }}>{isEdit ? 'Cập nhật' : 'Đăng bài'}</button>
      <button type="button" onClick={() => navigate(isEdit ? `/posts/${post?.id}` : '/')} style={{ padding: '10px 20px' }}>Hủy</button>
    </form>
  );
};

export default PostForm;