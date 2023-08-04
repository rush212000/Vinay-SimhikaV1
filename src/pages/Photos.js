import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Photos.css'; // Import the styles.css file

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
    default: 1,
    1100: 2,
    700: 1,
    500: 1
  };

  // State variables for carousel
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <div>
      <h1 className="min-w-[0px] text-[65px] md:text-[100px]" style={{ color: 'Black', textAlign: 'center', fontFamily: 'shelby, sans-serif', fontStyle: 'normal', position: 'relative', bottom: -40 }}>
        Photos
      </h1>
      <div className="min-[0px]:text-[18px] md:text-[20px]" style={{ marginTop: '10px', color: 'black', fontWeight: 'regular 400', fontFamily: 'cormorant infant', fontStyle: 'regular', textAlign: 'center' }}>
        A trip down memory lane...
      </div>
      <br />
      <div className="galleryWrap" style={{ columnCount: 3 }}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {photos.map((photo, index) => (
            <div key={index} className="gallery-item" onClick={() => openModal(index)}>
              <img src={photo} alt={`VS${index + 1}`} className="responsive-image" />
            </div>
          ))}
        </Masonry>
      </div>

      {/* Modal for image enlargement */}
     
<Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  className="image-modal sliderWrap"
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 9999,
    },
    content: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: 'none',
      border: 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0',
    },
  }}
>
  <button className="modal-close-button btnClose" onClick={closeModal}>
    <FontAwesomeIcon icon={faCircleXmark} />
  </button>

  <Carousel
    showThumbs={false} // Hide the thumbnail navigation
    selectedItem={currentImageIndex} // Show the current image
    showStatus={false} // Hide the status indicator (current slide / total slides)
    showArrows={false} // Hide the default arrows as we will create our custom navigation
    swipeable={false} // Disable swipe to prevent accidental slide changes
    emulateTouch={false} // Disable touch emulation for the same reason
    showIndicators={false} // Hide the indicators at the bottom
    renderArrowPrev={(onClickHandler, hasPrev, label) =>
      hasPrev && (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            zIndex: 1,
            transform: 'translateY(-50%)',
          }}
        >
          <FontAwesomeIcon icon={faCircleChevronLeft} />
        </button>
      )
    }
    renderArrowNext={(onClickHandler, hasNext, label) =>
      hasNext && (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          style={{
            position: 'absolute',
            top: '50%',
            right: 0,
            zIndex: 1,
            transform: 'translateY(-50%)',
          }}
        >
          <FontAwesomeIcon icon={faCircleChevronRight} />
        </button>
      )
    }
  >
    {photos.map((photo, index) => (
      <div key={index} className="carousel-item">
        <img
          src={photo}
          alt={`VS${index + 1}`}
          className="responsive-image"
          style={{ width: '40%', height: 'auto' }}
        />
      </div>
    ))}
  </Carousel>
</Modal>


      <Footer />
    </div>
  );
};

export default Photos;
