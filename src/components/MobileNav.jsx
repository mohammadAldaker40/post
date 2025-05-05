import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        // Scrolling down & past navbar height
        setIsScrolled(true);
        setIsMenuOpen(false); // Close menu when scrolling down
      } else {
        // Scrolling up or at top
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`mobile-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="mobile-nav-content">
        <Link to="/" className="mobile-nav-brand">
          Posts
        </Link>
        <button 
          className={`mobile-nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
      
      <div className={`mobile-nav-dropdown ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-menu">
          <Link to="/" className="mobile-nav-item" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/add-post" className="mobile-nav-item" onClick={() => setIsMenuOpen(false)}>
            Add New Post
          </Link>
          {/* Add more menu items here */}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav; 