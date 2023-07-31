import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Modal from 'react-modal'; // Import the react-modal library

import VS1 from "../img/Photos/V&S1.jpg";
import VS2 from "../img/Photos/V&S2.jpg";
import VS3 from "../img/Photos/V&S3.jpg";
import VS4 from "../img/Photos/V&S4.jpg";
import VS5 from "../img/Photos/V&S5.jpg";
import VS6 from "../img/Photos/V&S6.jpg";
import VS7 from "../img/Photos/V&S7.jpg";
import VS8 from "../img/Photos/V&S8.jpg";
import VS9 from "../img/Photos/V&S9.jpg";
import VS10 from "../img/Photos/V&S10.jpg";
import VS11 from "../img/Photos/V&S11.jpg";
import VS12 from "../img/Photos/V&S12.jpg";
import VS13 from "../img/Photos/V&S13.jpg";

const photos = [
  VS1, VS2, VS3, VS4, VS5, VS6,
  VS7, VS8, VS9, VS10, VS11, VS12, VS13
];

const Photos = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };





  return (
    <div>
      <style>
        {`
          @import url('https://use.typekit.net/upl4fxr.css');

          .my-masonry-grid {
            display: flex;
            margin-left: -30px; /* gutter size offset */
            width: auto;
          }

          .my-masonry-grid_column {
            padding-left: 30px; /* gutter size */
            background-clip: padding-box;
          }

          .gallery-item {
            margin-bottom: 30px;
          }

          .gallery-item img {
            width: 100%;
            display: block;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
      <br/>
      <br/>
      <h1
        className='min-w-[0px] text-[65px] md:text-[100px]'
        style={{
          color: 'Black',
          textAlign: 'center',
          fontFamily: 'shelby, sans-serif',
          fontStyle: 'normal',
          //fontSize: '100px',
          position: 'relative',
          bottom: 10,
        }}
      >
        Photos
      </h1>

      <div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {photos.map((photo, index) => (
            <div key={index} className="gallery-item" onClick={() => openModal(index)}>
              <img src={photo} alt={`VS${index + 1}`} />
            </div>
          ))}
        </Masonry>
      </div>

      {/* Modal for image enlargement */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Enlarged Image Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 9999,
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'none',
            border: 'none',
          },
        }}
      >
        <div>
          <button onClick={prevImage}>&lt;</button>
          <img src={photos[currentImageIndex]} alt={`VS${currentImageIndex + 1}`} />
          <button onClick={nextImage}>&gt;</button>
        </div>
      </Modal>
    </div>
  );
};

export default Photos;