// src/components/Header.jsx
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <div className="header-icon">
        <img src="D:\Learn-React\Portfolio Website Nandhu\Nandhu-portfolio\src\components\image\nandhu-photo.jpg" alt="Nandhu-Photo" />
      </div>
    </header>
  );
};

export default Header;
