
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Photos.css'; // Ensure this points to your CSS file


import VS1 from "../img/Photos/V&SGallery-1.jpg";
import VS2 from "../img/Photos/V&SGallery-2.jpg";
import VS3 from "../img/Photos/V&SGallery-3.jpg";
import VS4 from "../img/Photos/V&SGallery-4.jpg";
import VS5 from "../img/Photos/V&SGallery-5.jpg";
import VS6 from "../img/Photos/V&SGallery-6.jpg";
import VS7 from "../img/Photos/V&SGallery-7.jpg";
import VS8 from "../img/Photos/V&SGallery-8.jpg";
import VS9 from "../img/Photos/V&SGallery-9.jpg";
import VS10 from "../img/Photos/V&SGallery-10.jpg";
import VS11 from "../img/Photos/V&SGallery-11.jpg";
import VS12 from "../img/Photos/V&SGallery-12.jpg";
import VS13 from "../img/Photos/V&SGallery-13.jpg";
import VS14 from "../img/Photos/V&SGallery-14.jpg";
import VS15 from "../img/Photos/V&SGallery-15.jpg";
import VS16 from "../img/Photos/V&SGallery-16.jpg";
import VS17 from "../img/Photos/V&SGallery-17.jpg";
import VS18 from "../img/Photos/V&SGallery-18.jpg";
import VS19 from "../img/Photos/V&SGallery-19.jpg";
import VS20 from "../img/Photos/V&SGallery-20.jpg";
import VS21 from "../img/Photos/V&SGallery-21.jpg";
import VS22 from "../img/Photos/V&SGallery-22.jpg";
import VS23 from "../img/Photos/V&SGallery-23.jpg";
import VS24 from "../img/Photos/V&SGallery-24.jpg";
import VS25 from "../img/Photos/V&SGallery-25.jpg";
import VS26 from "../img/Photos/V&SGallery-26.jpg";
import VS27 from "../img/Photos/V&SGallery-27.jpg";
import VS28 from "../img/Photos/V&SGallery-28.jpg";
import VS29 from "../img/Photos/V&SGallery-29.jpg";
import VS30 from "../img/Photos/V&SGallery-30.jpg";
import VS31 from "../img/Photos/V&SGallery-31.jpg";
import VS32 from "../img/Photos/V&SGallery-32.jpg";
import VS33 from "../img/Photos/V&SGallery-33.jpg";
import VS34 from "../img/Photos/V&SGallery-34.jpg";
import VS35 from "../img/Photos/V&SGallery-35.jpg";
import VS36 from "../img/Photos/V&SGallery-36.jpg";
import VS37 from "../img/Photos/V&SGallery-37.jpg";
import VS38 from "../img/Photos/V&SGallery-38.jpg";
import VS39 from "../img/Photos/V&SGallery-39.jpg";
import VS40 from "../img/Photos/V&SGallery-40.jpg";
import VS41 from "../img/Photos/V&SGallery-41.jpg";
import VS42 from "../img/Photos/V&SGallery-42.jpg";
import VS43 from "../img/Photos/V&SGallery-43.jpg";
import VS44 from "../img/Photos/V&SGallery-44.jpg";
import VS45 from "../img/Photos/V&SGallery-45.jpg";
import VS46 from "../img/Photos/V&SGallery-46.jpg";
import VS47 from "../img/Photos/V&SGallery-47.jpg";
import VS48 from "../img/Photos/V&SGallery-48.jpg";
import VS49 from "../img/Photos/V&SGallery-49.jpg";
import VS50 from "../img/Photos/V&SGallery-50.jpg";
import VS51 from "../img/Photos/V&SGallery-51.jpg";
import VS52 from "../img/Photos/V&SGallery-52.jpg";
import VS53 from "../img/Photos/V&SGallery-53.jpg";
import VS54 from "../img/Photos/V&SGallery-54.jpg";
import VS55 from "../img/Photos/V&SGallery-55.jpg";
import VS56 from "../img/Photos/V&SGallery-56.jpg";
import VS57 from "../img/Photos/V&SGallery-57.jpg";
import VS58 from "../img/Photos/V&SGallery-58.jpg";
import VS59 from "../img/Photos/V&SGallery-59.jpg";
import VS60 from "../img/Photos/V&SGallery-60.jpg";
import VS61 from "../img/Photos/V&SGallery-61.jpg";
import VS62 from "../img/Photos/V&SGallery-62.jpg";
import VS63 from "../img/Photos/V&SGallery-63.jpg";
import VS64 from "../img/Photos/V&SGallery-64.jpg";
import VS65 from "../img/Photos/V&SGallery-65.jpg";
import VS66 from "../img/Photos/V&SGallery-66.jpg";
import VS67 from "../img/Photos/V&SGallery-67.jpg";
import VS68 from "../img/Photos/V&SGallery-68.jpg";

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
  VS1, VS2, VS3, VS4, VS5, VS6, VS7, VS8, VS9, VS10,
  VS11, VS12, VS13, VS14, VS15, VS16, VS17, VS18, VS19, VS20,
  VS21, VS22, VS23, VS24, VS25, VS26, VS27, VS28, VS29, VS30,
  VS31, VS32, VS33, VS34, VS35, VS36, VS37, VS38, VS39, VS40,
  VS41, VS42, VS43, VS44, VS45, VS46, VS47, VS48, VS49, VS50,
  VS51, VS52, VS53, VS54, VS55, VS56, VS57, VS58, VS59, VS60,
  VS61, VS62, VS63, VS64, VS65, VS66, VS67, VS68,
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
      <h1
        className="min-w-[0px] text-[65px] md:text-[100px]"
        style={{
          color: 'Black',
          textAlign: 'center',
          fontFamily: 'shelby, sans-serif',
          fontStyle: 'normal',
          position: 'relative',
          bottom: -40,
        }}
      >
        Photos
      </h1>
      <div
        className="min-[0px]:text-[18px] md:text-[20px]"
        style={{
          marginTop: '10px',
          color: 'black',
          fontWeight: 'regular 400',
          fontFamily: 'cormorant infant',
          fontStyle: 'regular',
          textAlign: 'center',
        }}
      >
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
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(index)}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Add this style for Fit Scale
            >
              <img
                src={photo}
                alt={`VS${index + 1}`}
                className="responsive-image"
                style={{
                  objectFit: 'contain', // Change 'cover' to 'contain' for Fill Scale
                  width: '100%',
                  height: '100%',
                }}
              />
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
            backgroundColor: 'transparent',
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
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <Carousel
          showThumbs={false} // Hide the thumbnail navigation
          selectedItem={currentImageIndex} // Show the current image
          showStatus={false} // Hide the status indicator (current slide / total slides)
          showArrows={true} // Hide the default arrows as we will create our custom navigation
          swipeable={true} // Disable swipe to prevent accidental slide changes
          emulateTouch={true} // Disable touch emulation for the same reason
          showIndicators={true} // Hide the indicators at the bottom
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
                style={{ width: '45%', height: '70%' }}
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