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
    <header
      className={`fixed w-full px-4 lg:px-10 z-30 h-16 lg:h-20 flex items-center justify-start ${
        isScrolled ? 'bg-black' : ''
      }`}
    >
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between uppercase'>
        {/* Logo Section */}
        <Link to={'/'} className='max-w-24'>
          {/* Adjust the max-width value to make the logo smaller */}
          <img src={Logo} alt='Logo' className='max-h-9' />
          {/* Adjust the max-height value to make the logo smaller */}
        </Link>

        {/* Nav - Initially hidden - show on desktop mode */}
        <nav
          className={`hidden xl:flex flex-1 justify-center items-center gap-x-12 font-semibold ${
            isScrolled ? 'text-white' : 'text-white'
          }`}
        >
          <Link to={'/'} className='hover:text-primary transition'>
            Home
          </Link>
          <Link to={'/about'} className='hover:text-primary transition'>
            Our Event
          </Link>
          <Link to={'/portfolio'} className='hover:text-primary transition'>
            Our Story
          </Link>
          <Link to={'/contact'} className='hover:text-primary transition'>
            Photos
          </Link>
          <Link to={'/contact'} className='hover:text-primary transition'>
            FAQs
          </Link>
        </nav>
      </div>
      {/* Socials */}
      <Socials />
    </header>
  );
};

export default Header;