import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f0f0f0' }}>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjQmJmVuaDIMZUwBH-oZXEwwbcOt9HK5LJw&s"  // Thay bằng URL bạn copy từ Google
        alt="Logo" 
        style={{ height: '40px', width: 'auto' }} 
      />
      
      <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Trang chủ</NavLink>
      <button onClick={() => window.location.href = '/create'}>Viết bài</button>
    </nav>
  );
};

export default Navbar;