import { Routes, Route } from 'react-router-dom';
import TrangChu from '../trang/TrangChu';
import TrangTaoBai from '../trang/TrangTaoBai';
import TrangChiTiet from '../trang/TrangChiTiet';
import TrangChinhSua from '../trang/TrangChinhSua';

const DinhTuyenUngDung: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TrangChu />} />
      <Route path="/create" element={<TrangTaoBai />} />
      <Route path="/posts/:id" element={<TrangChiTiet />} />
      <Route path="/posts/edit/:id" element={<TrangChinhSua />} />
    </Routes>
  );
};

export default DinhTuyenUngDung;