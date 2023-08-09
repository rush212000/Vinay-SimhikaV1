import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Masonry from "react-masonry-css";
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

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll overflow
    } else {
      document.body.style.overflow = "visible"; // Re-enable scroll overflow
    }
  }, [isModalOpen]);

  const openSlideshow = (index) => {
    setCurrent(index);
    setIsModalOpen(true);
  };

  const closeSlideshow = () => {
    setCurrent(null);
    setIsModalOpen(false);
  };

  const handleSwipe = (delta) => {
    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        setCurrent((current + images.length - 1) % images.length);
      } else if (delta < 0) {
        setCurrent((current + 1) % images.length);
      }
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX !== null) {
      const touchCurrentX = e.touches[0].clientX;
      const touchDiff = touchCurrentX - touchStartX;
      handleSwipe(touchDiff);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  const handleCursorSwipe = (e) => {
    const cursorDiff = e.deltaX;
    handleSwipe(cursorDiff);
  };

  const handleModalSwipe = (e) => {
    const touchCurrentX = e.touches[0].clientX;
    const touchDiff = touchCurrentX - touchStartX;

    if (Math.abs(touchDiff) > 50) {
      if (touchDiff > 0) {
        setCurrent((current + images.length - 1) % images.length);
      } else if (touchDiff < 0) {
        setCurrent((current + 1) % images.length);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (isModalOpen && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
      if (e.key === "ArrowLeft") {
        setCurrent((current + images.length - 1) % images.length);
      } else if (e.key === "ArrowRight") {
        setCurrent((current + 1) % images.length);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [current, isModalOpen]);

  const imagesPerRow = 4;

  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <div style={{ backgroundColor: "black", height: "80px" }}></div>
      <nav>{/* Your navigation bar content */}</nav>
      <div>
        <h1
          className="min-w-[0px] text-[65px] md:text-[100px]"
          style={{
            color: "Black",
            textAlign: "center",
            fontFamily: "shelby, sans-serif",
            fontStyle: "normal",
            position: "relative",
            bottom: -40,
          }}
        >
          Photos
        </h1>
        <div
          className="min-[0px]:text-[18px] md:text-[20px]"
          style={{
            marginTop: "10px",
            color: "black",
            fontWeight: "regular 400",
            fontFamily: "cormorant infant",
            fontStyle: "regular",
            textAlign: "center",
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
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onWheel={handleCursorSwipe}
              >
                <img
                  className="photo-image"
                  src={image.src}
                  alt={`Image ${index}`}
                  loading="lazy"
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
              <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleModalSwipe}
                onTouchEnd={handleTouchEnd}
                onWheel={handleCursorSwipe}
              >
                <>
                  <img
                    className="slideshow-image"
                    src={images[current].src}
                    alt={`Image ${current}`}
                    loading="lazy"
                  />
                  <div className="slideshow-nav">
                    <button
                      className="slideshow-nav-btn-left"
                      onClick={() =>
                        setCurrent((current + images.length - 1) % images.length)
                      }
                    >
                      &larr;
                    </button>
                    <button
                      className="slideshow-nav-btn-right"
                      onClick={() => setCurrent((current + 1) % images.length)}
                    >
                      &rarr;
                    </button>
                  </div>
                  <div className="modal_close" onClick={closeSlideshow}>
                    &#10005;
                  </div>
                </>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Photos;
