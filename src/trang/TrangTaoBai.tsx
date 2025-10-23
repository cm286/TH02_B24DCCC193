import { usePosts } from '../ngu_canh/BaiVietContext';
import PostForm from '../components/PostForm';

const TrangTaoBai: React.FC = () => {
  const { addPost } = usePosts();

  return <PostForm onSubmit={addPost} />;
};

export default TrangTaoBai;