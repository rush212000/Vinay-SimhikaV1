import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const isMobileView = () => {
    return window.innerWidth <= 768;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileView());
    };

    window.addEventListener('resize', handleResize);

    // Check on initial mount
    setIsMobile(isMobileView());

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <div className="navbar">
      <CSSTransition in={isOpen} timeout={300} classNames="slide" unmountOnExit>
        <div className={`menu ${isOpen ? 'active' : ''}`}>
          <a href="/" onClick={closeNavbar}>Home</a>
          <a href="/pages/OurEvent" onClick={closeNavbar}>OurEvent</a>
          <a href="/pages/OurStory" onClick={closeNavbar}>OurStory</a>
          <a href="/pages/Photos" onClick={closeNavbar}>Photos</a>
          <a href="/pages/FAQs" onClick={closeNavbar}>FAQs</a>
        </div>
      </CSSTransition>
      
      {/* Menu button */}
      <button className={`menu-btn ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
        ☰
      </button>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          right: ${isOpen ? '0' : '-260px'}; // Slide the menu in or out based on isOpen state
          width: 100%;
          height: 100%;
          background-color: #E0E0E0;
          color: #000;
          z-index: 999;
        }

        .menu-btn {
          font-size: 50px;
          background: none;
          border: none;
          cursor: pointer;
          position: fixed;
          top: 20px;
          right: 20px;
        }

        .menu-btn.active {
          right: 300px; /* Adjust this value to fit your menu width */
        }

        .slide-enter {
          transform: translateX(100%);
        }

        .slide-enter-active {
          transform: translateX(0);
          transition: transform 300ms ease-in-out;
        }

        .slide-exit {
          transform: translateX(0);
        }

        .slide-exit-active {
          transform: translateX(100%);
          transition: transform 300ms ease-in-out;
        }

        .menu {
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 260px; /* Width of the menu */
        }

        .menu.active {
          display: flex; /* Show the menu when active */
        }

        .menu a {
          color: #333;
          text-decoration: none;
          margin-bottom: 10px;
        }

        .menu a:hover {
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default MobileNav;
