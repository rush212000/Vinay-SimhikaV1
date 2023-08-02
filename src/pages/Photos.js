import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Modal from 'react-modal';
import FSLightbox from 'fslightbox';

import VS1 from '../img/Photos/V&S1.jpg';
import VS2 from '../img/Photos/V&S2.jpg';
import VS3 from '../img/Photos/V&S3.jpg';
import VS4 from '../img/Photos/V&S4.jpg';
import VS5 from '../img/Photos/V&S5.jpg';
import VS6 from '../img/Photos/V&S6.jpg';
import VS7 from '../img/Photos/V&S7.jpg';
import VS8 from '../img/Photos/V&S8.jpg';
import VS9 from '../img/Photos/V&S9.jpg';
import VS10 from '../img/Photos/V&S10.jpg';
import VS11 from '../img/Photos/V&S11.jpg';
import VS12 from '../img/Photos/V&S12.jpg';
import VS13 from '../img/Photos/V&S13.jpg';
import VSfoot from '../img/Photos/vsFoot.png';

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <div className="container mx-auto py-4">
        {/* Add your footer content here */}
        <div className="flex justify-center items-center">
          <img src={VSfoot} alt="Footer Image" className="w-20 h-20 mr-4" />
          <p className="text-center text-gray-600">
            Your footer content here
          </p>
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
  
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxVisible(true);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxVisible(false);
  };

  return (
    <div>
      <style>
        {/* Your styles go here */}
      </style>
      {/* Black Navbar */}
      <div className="navbar">
        {/* Add your navbar content here if needed */}
      </div>
      <br/>
      <br/>
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
        style={{ marginTop: '20px', color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'cormorant infant',
              fontStyle: 'regular',
              textAlign: 'center'
    }}>
        A trip down memory lane...
        </div>
        <br/>
        <div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {photos.map((photo, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img src={photo} alt={`VS${index + 1}`} />
              </div>
            ))}
          </Masonry>
        </div>
      {/* FSLightbox */}
      <FSLightbox
        toggler={lightboxVisible}
        sources={photos}
        slide={currentImageIndex}
        type="image"
        onClose={() => closeLightbox()}
      />
      {/* Modal for image enlargement */}
      <Modal
        isOpen={lightboxVisible}
        onRequestClose={() => closeLightbox()}
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
            maxWidth: '600px', // Adjust the width as needed
          },
        }}
      >
        <div className="modal-image-container">
          <img src={photos[currentImageIndex]} alt={`VS${currentImageIndex + 1}`} className="modal-image" />
          <button className="modal-close-button" onClick={() => closeLightbox()}>
            X
          </button>
          <div className="modal-controls">
            <button className="modal-control-button" onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1))}>
              &lt;
            </button>
            <button className="modal-control-button" onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photos.length)}>
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
