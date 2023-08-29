import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials';
import Logo from '../img/header/SimVinsHisHeart2.png';
import MobileNav from './MobileNav';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1191); // Adjust the breakpoint to your desired value for mobile view
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Clean up event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavbarButtonClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');
        `}
      </style>

      {/* Styles (omitted for brevity) */}
      <header
        className={`fixed w-full px-4 lg:px-10 z-30 h-16 lg:h-20 flex items-center justify-start ${
          isScrolled ? 'bg-black' : ''
        }`}
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
          {/* Logo Section */}
          <Link to={'/'} className="max-w-24">
            <img src={Logo} alt="Logo" className="max-h-9" />
          </Link>

          {/* Nav - Initially hidden - show on desktop mode */}
          <nav
            className={`hidden xl:flex flex-1 justify-center items-center gap-x-12 font-normal ${
              isScrolled ? 'text-white' : 'text-white'
            }`}
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {/* Use relative URLs in the "to" prop */}
            <Link
              to={'/'}
              className="hover:underline md:underline-offset-4"
              style={{ marginLeft: '-165px' }}
              onClick={handleNavbarButtonClick}
            >
              HOME
            </Link>
            <Link
              to={'/pages/OurEvent'}
              className="hover:underline md:underline-offset-4"
              onClick={handleNavbarButtonClick}
            >
              OUR EVENTS
            </Link>
            <Link
              to={'/pages/OurStory'}
              className="hover:underline md:underline-offset-4"
              onClick={handleNavbarButtonClick}
            >
              OUR STORY
            </Link>
            <Link
              to={'/pages/Photos'}
              className="hover:underline md:underline-offset-4"
              onClick={handleNavbarButtonClick}
            >
              PHOTOS
            </Link>
            <Link
              to={'/pages/FAQs'}
              className="hover:underline md:underline-offset-4"
              onClick={handleNavbarButtonClick}
            >
              FAQS
            </Link>
          </nav>

          {/* Render the RSVP button only in non-mobile view */}
          {!isMobileView && <MobileNav />}
            <div className="fixed top-5.1 right-20" style={{ zIndex: '1' }}>
              <Link
                to="/pages/RSVP"
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  position: 'relative',
                }}
              >
                <button
                  className="min-[0px]:hidden min-[1192px]:block btn rounded-lg bg-white hover:bg-opacity-80 transition-all duration-300"
                  style={{
                    width: '85px',
                    height: '20px',
                    fontSize: '16px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontStyle: 'regular',
                    color: '#000000',
                  }}
                >
                  RSVP
                </button>
              </Link>
            </div>
          
        </div>

        {/* Socials */}
        <Socials />

        {/* Render the MobileNav component */}
        {isMobileView && <MobileNav />}
      </header>
    </>
  );
};

export default Header;
