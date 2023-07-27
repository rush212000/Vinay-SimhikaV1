import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if the screen is mobile view
  const isMobileView = () => {
    return window.innerWidth <= 768; // You can adjust the breakpoint (768px) as needed
  };

  // State to track if the screen is in mobile view
  const [isMobile, setIsMobile] = useState(isMobileView());

  useEffect(() => {
    // Event listener to detect changes in screen size
    const handleResize = () => {
      setIsMobile(isMobileView());
    };

    // Attach event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Only render the MobileNav component on mobile view
  if (!isMobile) {
    return null;
  }

  return (
    <div className="navbar">
      <button className="menu-btn" onClick={toggleNavbar}>
        ☰
      </button>
      <CSSTransition in={isOpen} timeout={300} classNames="slide" unmountOnExit>
        <div className="menu">
          {/* Add your navigation links here */}
          <a href="/">Home</a>
          <a href="/pages/OurEvent">OurEvent</a>
          <a href="/pages/OurStory">OurStory</a>
          <a href="/pages/Photos">Photos</a>
          <a href="/pages/FAQs">FAQs</a>
        </div>
      </CSSTransition>

      <style>{`
        /* Navbar container */
        .navbar {
          position: relative;
        }

        /* Button for opening the menu */
        .menu-btn {
          font-size: 24px;
          background: none;
          border: none;
          cursor: pointer;
        }

        /* Slide-in animation for the menu */
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

        /* Menu styling */
        .menu {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 200px;
          background-color: #f0f0f0;
          box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
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
