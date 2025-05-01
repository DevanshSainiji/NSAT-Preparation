import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../../styles/Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const menuItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Mock Tests', to: 'mock-tests' },
    { name: 'Quizzes', to: 'quizzes' },
    { name: 'Videos', to: 'videos' },
    { name: 'Feedback', to: 'feedback' }
  ];
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <h1>
            <Link 
              to="hero" 
              spy={true} 
              smooth={true}
              duration={500}
              className="navbar-logo-link"
            >
              NSAT Prep
            </Link>
          </h1>
        </div>
        
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`navbar-toggle-icon ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index} className="navbar-item">
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbar-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;