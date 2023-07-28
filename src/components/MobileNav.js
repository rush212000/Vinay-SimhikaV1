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
        {isOpen ? '✕' : '☰'}
      </button>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          right: ${isOpen ? '0' : '-100px'}; // Slide the menu in or out based on isOpen state
          width: 80%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.2); /* Black background with 20% opacity */
          color: #fff; /* White font color */
          z-index: 999;
        }

        .menu-btn {
          font-size: 30px; /* Reduce the font size */
          background: none;
          border: none;
          cursor: pointer;
          position: fixed;
          top: 0px;
          right: 15px;
          border-radius: 50%; /* Rounded corners */
          padding: 8px; /* Reduce the padding */
        }

        .menu-btn.active {
          right: 20px;
          top: 20px;
          transform: rotate(90deg); /* Rotate the button to form a cross (X) */
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
          align-items: center; /* Center items horizontally */
          justify-content: center; /* Center items vertically */
          width: 250px; /* Width of the menu */
        }

        .menu.active {
          display: flex; /* Show the menu when active */
        }

        .menu a {
          color: #fff; /* White font color */
          text-decoration: none;
          margin-bottom: 10px;
        }

        .menu a:hover {
          color: #ccc; /* Light gray color on hover */
        }
      `}</style>
    </div>
  );
};

export default MobileNav;
