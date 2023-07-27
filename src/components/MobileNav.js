import React, { useState } from 'react';

// Import Icons
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';

// Import Link
import { Link } from 'react-router-dom';

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="text-primary xl:hidden">
      {/* Nav Open Button */}
      <div onClick={toggleMenu} className="text-3xl cursor-pointer">
        <CgMenuRight />
      </div>

      {/* Mobile Nav */}
      {openMenu && (
        <div className="bg-white shadow-2xl w-full absolute top-0 right-0 h-screen z-20 max-w-xs">
          {/* Icons */}
          <div onClick={toggleMenu} className="text-4xl absolute z-30 right-5 top-8 text-primary cursor-pointer">
            <IoMdClose />
          </div>

          {/* List Of Menus */}
          <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
            <li>
              <Link to="/pages/Home">Home</Link>
            </li>
            <li>
              <Link to="/pages/OurEvent">OurEvent</Link>
            </li>
            <li>
              <Link to="/pages/OurStory">OurStory</Link>
            </li>
            <li>
              <Link to="/pages/Photos">Photos</Link>
            </li>
            <li>
              <Link to="/pages/FAQs">FAQs</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
