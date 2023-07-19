import React from 'react';

// Import Icons
import gramImage from '../img/socials/gramv2.png';

const Socials = () => {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul className='absolute top-7 right-30' style={{ marginLeft: '-170px' }}>
        {/* Add "ml-auto" class to move to the right */}
        <li>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <img src={gramImage} alt='Instagram' style={{ width: '25px', height: 'auto' }} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
