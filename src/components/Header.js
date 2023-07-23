import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials';
import Logo from '../img/header/SimVinsHisHeart2.png';

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
          @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

          /* Add custom CSS styles for responsive images */
          .responsive-image {
            width: 100%;
            height: auto;
          }
        `}
      </style>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,400;1,400;1,600&display=swap');
        `}
      </style>

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
            <Link to={'/'} className="hover:text-primary transition"style={{ marginLeft: '-120px' }}>
              
              Home
            </Link>
            <Link to={'/pages/OurEvent'} className="hover:text-primary transition">
              Our Events
            </Link>
            <Link to={'/pages/OurStory'} className="hover:text-primary transition">
              Our Story
            </Link>
            <Link to={'/contact'} className="hover:text-primary transition">
              Photos
            </Link>
            <Link to={'/pages/FAQs'} className="hover:text-primary transition">
              FAQs
            </Link>
          </nav>
          <div className="fixed top-5 right-20" style={{ zIndex: '1' }}>
            <Link
              to="/contact"
              className="btn rounded-lg"
              style={{
                marginLeft: 'auto',
                color: 'black',
                width: '85px', // Adjust the width as desired
                height: '20px', // Adjust the height as desired
                fontSize: '12px', // Adjust the font size as desired
                fontFamily: 'Montserrat, sans-serif', // Add the font-family here too
              }}
            >
              RSVP
            </Link>
          </div>
        </div>
        {/* Socials */}
        <Socials />
      </header>
    </>
  );
};

export default Header;
