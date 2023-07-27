import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials';
import Logo from '../img/header/SimVinsHisHeart2.png';
import MobileNav from './MobileNav'; // Import the MobileNav component

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <style>
    {`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');
  `}
</style>

      {/* ... (rest of the code) ... */}

      <header
        className={`fixed w-full px-4 lg:px-10 z-30 h-16 lg:h-20 flex items-center justify-start ${
          isScrolled ? 'bg-black' : ''
        }`}
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between uppercase">
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
            <Link to={'/'} className="hover:underline md:underline-offset-4" style={{ marginLeft: '-165px' }}>
              Home
            </Link>
            <Link to={'/pages/OurEvent'} className="hover:underline md:underline-offset-4">
              Our Events
            </Link>
            <Link to={'/pages/OurStory'} className="hover:underline md:underline-offset-4">
              Our Story
            </Link>
            <Link to={'/pages/Photos'} className="hover:underline md:underline-offset-4">
              Photos
            </Link>
            <Link to={'/pages/FAQs'} className="hover:underline md:underline-offset-4">
              FAQs
            </Link>
          </nav>
          <div className="fixed top-5 right-20" style={{ zIndex: '1' }}>
            {/* Use the Link component to navigate to RSVP.js */}
            <Link to="/pages/RSVP" style={{ color: 'black', textDecoration: 'none', position: 'relative' }}>
              <button className="btn rounded-lg bg-white hover:bg-opacity-80 transition-all duration-300" style={{ width: '85px', height: '20px', fontSize: '16px', fontFamily: 'Montserrat, sans-serif', color: '#ffffff' }}>
                RSVP
              </button>
              <span
                style={{
                  color: 'black',
                  fontFamily: 'Montserrat',
                  fontStyle: 'semi bold',
                  fontWeight: '600',
                  position: 'relative',
                  top: -28,
                  left: 28,
                  pointerEvents: 'none',
                }}
              >
                RSVP
              </span>
            </Link>
          </div>
        </div>
        {/* Socials */}
        <Socials />

        {/* Render the MobileNav component */}
        <MobileNav />
      </header>
    </>
  );
};

export default Header;
