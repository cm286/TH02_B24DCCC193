import { PostProvider } from './ngu_canh/BaiVietContext';
import Navbar from './components/Navbar';
import DinhTuyenUngDung from './dinh_tuyen/DinhTuyenUngDung';

const App: React.FC = () => {
  return (
    <PostProvider>
      <Navbar />
      <DinhTuyenUngDung />
    </PostProvider>
  );
};

export default App;