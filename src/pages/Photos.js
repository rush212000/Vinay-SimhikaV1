import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Masonry from "react-masonry-css"; // Import the masonry component
import "./Photos.css";

function Photos() {
  const [current, setCurrent] = useState(null);
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      const imageArray = [];
      for (let i = 1; i <= 68; i++) {
        try {
          const module = await import(`../img/Photos/V&SGallery-${i}.jpg`);
          imageArray.push({
            src: module.default,
          });
        } catch (error) {
          console.error("Error loading image:", error);
        }
      }
      setImages(imageArray);
    };

    loadImage();
  }, []);

  const openSlideshow = (index) => {
    setCurrent(index);
    setIsModalOpen(true);
  };

  const closeSlideshow = () => {
    setCurrent(null);
    setIsModalOpen(false);
  };

  const imagesPerRow = 4; // Number of images per row

  return (

      <div style={{ backgroundColor: '#F6F6F6' }}>
           <div style={{ backgroundColor: 'black', height: '80px' }}></div>
      <nav>
        {/* Your navigation bar content */}
      </nav>

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
    <div className="photos-container">
      <Masonry
        breakpointCols={{ default: imagesPerRow, 1100: 3, 700: 2, 500: 1 }} // Responsive columns
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="photo-item"
            onClick={() => openSlideshow(index)}
          >
            <img
              className="photo-image"
              src={image.src}
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </Masonry>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeSlideshow}
        contentLabel="Image Slideshow"
        className="modal"
        overlayClassName="modal_overlay"
      >
        {current !== null && (
          <>
            <img
              className="slideshow-image"
              src={images[current].src}
              alt={`Image ${current}`}
            />
            <div className="slideshow-nav">
              <button
                className="slideshow-nav-btn"
                onClick={() => {
                  if (current === 0) {
                    setCurrent(images.length - 1);
                  } else {
                    setCurrent(current - 1);
                  }
                }}
              >
                Previous
              </button>
              <button
                className="slideshow-nav-btn"
                onClick={() => {
                  if (current === images.length - 1) {
                    setCurrent(0);
                  } else {
                    setCurrent(current + 1);
                  }
                }}
              >
                Next
              </button>
            </div>
            <div className="modal_close" onClick={closeSlideshow}>
              &times;
            </div>
          </>
        )}
      </Modal>
    </div>
    </div>
    </div>
  );
}

export default Photos;
