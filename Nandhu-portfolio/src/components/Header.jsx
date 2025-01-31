// src/components/Header.jsx
// Importing NavLink from 'react-router-dom' to create links with active styling support
import { NavLink } from 'react-router-dom';

// Importing the CSS file to style the Header component
import './Header.css';

// Header component definition
const Header = () => {
  return (
    // Main header element with the class 'header' for styling
    <header className="header">
      
      {/* Navigation bar containing the list of links */}
      <nav>
        <ul>
          {/* NavLink for the Home page, with 'end' prop to highlight it only on exact match */}
          <li><NavLink to="/" end>Home</NavLink></li>
          
          {/* NavLink for the About page */}
          <li><NavLink to="/about">About</NavLink></li>
          
          {/* NavLink for the Projects page */}
          <li><NavLink to="/projects">Projects</NavLink></li>
          
          {/* NavLink for the Contact page */}
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      
      {/* Container for the header icon (image) */}
      <div className="header-icon">
        {/* Display the image of the user (Nandhu) with alt text */}
        <img 
          src="D:\Learn-React\Portfolio Website Nandhu\Nandhu-portfolio\src\components\image\nandhu-photo.jpg" 
          alt="Nandhu-Photo" 
        />
      </div>
    </header>
  );
};

// Exporting the Header component so it can be used in other parts of the application
export default Header;
