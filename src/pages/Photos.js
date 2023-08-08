import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Masonry from "react-masonry-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Photos.css";

function Photos() {
  const [current, setCurrent] = useState(null);
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

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

  const handleCursorSwipe = (delta) => {
    if (delta > 50 && current !== 0) {
      setCurrent(current - 1);
    } else if (delta < -50 && current !== images.length - 1) {
      setCurrent(current + 1);
    }
  };

  const imagesPerRow = 4;

  const slideshowImageStyle = {
    maxHeight: "80vh", // Set the desired maximum height for slideshow images
    width: "auto", // Maintain aspect ratio
    display: "block",
    margin: "0 auto",
    objectFit: "contain",
  };

  return (
    <div style={{ backgroundColor: '#F6F6F6' }}>
      <div style={{ backgroundColor: 'black', height: '80px' }}></div>
      <nav>{/* Your navigation bar content */}</nav>
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
            fontWeight: '400',
            fontFamily: 'cormorant infant',
            fontStyle: 'normal',
            textAlign: 'center',
          }}
        >
          A trip down memory lane...
        </div>
        <br />
        <div className="photos-container">
          <Masonry
            breakpointCols={{
              default: imagesPerRow,
              1100: 3,
              700: 3,
              500: 3,
            }}
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
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeSlideshow}
        contentLabel="Image Slideshow"
        className="modal"
        overlayClassName="modal_overlay"
      >
        {current !== null && (
          <Carousel
            showThumbs={false}
            showStatus={false}
            swipeable={true}
            emulateTouch={false}
            infiniteLoop={false}
            selectedItem={current}
            onChange={(newIndex) => setCurrent(newIndex)}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt={`Image ${index}`}
                  style={slideshowImageStyle}
                />
              </div>
            ))}
          </Carousel>
        )}
      </Modal>
    </div>
  );
}

export default Photos;
