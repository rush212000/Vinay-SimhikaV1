import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Modal from 'react-modal';

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
import VSfoot from "../img/Photos/vsFoot.png";

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <div className="container mx-auto py-4">
        {/* Add your footer content here */}
        <div className="flex justify-center items-center">
          <img src={VSfoot} alt="Footer Image" className="w-20 h-20 mr-4" />
          <p className="text-center text-gray-600"></p>
        </div>
      </div>
    </footer>
  );
};

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

  // State variables for touch swipe support
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [initialX, setInitialX] = useState(null);
  const [movementX, setMovementX] = useState(0);
  

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleSwipeMove = (e) => {
    if (initialX !== null) {
      const newX = e.touches ? e.touches[0].clientX : e.clientX;
      const diffX = newX - initialX;
      setMovementX(diffX);
    }
  };

  const handleSwipeEnd = () => {
    if (movementX > 100) {
      handlePrevImage();
    } else if (movementX < -100) {
      handleNextImage();
    }
    setInitialX(null);
    setMovementX(0);
  };

  const handleTouchStart = (e) => {
    setInitialX(e.touches[0].clientX);
    setMovementX(0);
  };

  const handleTouchMove = (e) => {
    handleSwipeMove(e);
  };

  const handleTouchEnd = () => {
    handleSwipeEnd();
  };

  const handleMouseDown = (e) => {
    setInitialX(e.clientX);
    setMovementX(0);
  };

  const handleMouseMove = (e) => {
    handleSwipeMove(e);
  };

  const handleMouseUp = () => {
    handleSwipeEnd();
  };

  const handleDoubleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onDoubleClick={handleDoubleClick} // Enable double-click/double-tap to see the actual size of the image
      style={{ touchAction: 'pan-y' }}
    ><style>
    {`
     @import url('https://use.typekit.net/upl4fxr.css');
     @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,400;1,400;1,600&display=swap');
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
       max-width: 100%; /* Make the images responsive */
       height: auto; /* Maintain the aspect ratio */
       display: block;
       /* Remove the border-radius property to eliminate rounded edges */
       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
     }
     /* Navbar styles */
     .navbar {
       background-color: black;
       padding: 40px;
     }
     /* Modal styles */
     .image-modal {
       /* Add your modal styles here */
     }
     .modal-image-container {
       position: relative;
       display: flex;
       align-items: center;
     }
     .modal-image {
       max-width: 100%;
       max-height: 90vh;
       display: block;
       margin: auto;
     }
     .modal-controls {
       /* Add your modal controls styles here */
       position: absolute;
       bottom: 40px; /* Adjust the vertical position as needed */
       left: 0; /* Align the controls to the left side */
       width: 100%; /* Make sure the controls span the entire width */
       display: flex;
       justify-content: space-between; /* Distribute the buttons to the left and right edges */
     }
     .modal-control-button {
       background-color: rgba(0, 0, 0, 0.5);
       color: white;
       font-size: 1.5rem;
       border: none;
       cursor: pointer;
       padding: 8px;
       transition: background-color 0.3s;
     }
     .modal-control-button:hover {
       background-color: rgba(0, 0, 0, 0.7);
     }
     .modal-control-button.left {
       right: 0; /* Move the left arrow to the right side */
     }
     .modal-control-button.right {
       left: 0; /* Move the right arrow to the left side */
     }
     .modal-close-button {
       position: absolute;
       top: 0;
       right: 0;
       background-color: rgba(0, 0, 0, 0.5);
       color: white;
       font-size: 1.5rem;
       border: none;
       cursor: pointer;
       padding: 4px;
       transition: background-color 0.3s;
     }
     .modal-close-button:hover {
       background-color: rgba(0, 0, 0, 0.7);
     }
    `}
  </style>
      {/* Black Navbar */}
      <div className="navbar">
        {/* Add your navbar content here if needed */}
      </div>
      <br />
      <br />
      <h1
        className='min-w-[0px] text-[65px] md:text-[100px]'
        style={{
          color: 'Black',
          textAlign: 'center',
          fontFamily: 'shelby, sans-serif',
          fontStyle: 'normal',
          position: 'relative',
          bottom: 10,
        }}
      >
        Photos
      </h1>
      <div
        className='min-[0px]:text-[18px] md:text-[20px]'
        style={{
          marginTop: '20px', color: 'black',
          fontWeight: 'regular 400',
          fontFamily: 'cormorant infant',
          fontStyle: 'regular',
          textAlign: 'center',
        }}>
        A trip down memory lane...
      </div>
      <br />
      <div
        onMouseDown={(e) => setInitialX(e.clientX)}
        onMouseMove={handleSwipeMove}
        onMouseUp={handleSwipeEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: 'pan-y' }}
      >
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
        className="image-modal"
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
            maxWidth: '90vw', // Adjust the width as needed (90% of viewport width)
            maxHeight: '90vh', // Adjust the height as needed (90% of viewport height)
          },
        }}
      >
        <div className="modal-image-container">
          <img src={photos[currentImageIndex]} alt={`VS${currentImageIndex + 1}`} className="modal-image" />
          <button className="modal-close-button" onClick={closeModal}>
            X
          </button>
          <div className="modal-controls">
            <button className="modal-control-button" onClick={handlePrevImage}>
              &lt;
            </button>
            <button className="modal-control-button" onClick={handleNextImage}>
              &gt;
            </button>
          </div>
        </div>
      </Modal>
      <Footer />
    </div>
  );
};

export default Photos;
