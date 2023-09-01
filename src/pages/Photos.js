import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Masonry from "react-masonry-css";
import { LazyLoadImage } from "react-lazy-load-image-component"; // Use this package for lazy loading
import "react-lazy-load-image-component/src/effects/opacity.css"; // Import a fade-in effect
import "react-lazy-load-image-component/src/effects/blur.css"; // Import a blur effect
import "./Photos.css";
import VSfoot from '../img/Photos/vsFoot.png';
import { imageArray } from "./PhotosImports";
import { PhotoSwipeGallery } from "react-photoswipe";
import 'react-photoswipe/lib/photoswipe.css';
import 'react-photoswipe/dist/photoswipe.css';


function Photos() {
  const [current, setCurrent] = useState(null);
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [swipeInProgress, setSwipeInProgress] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    // Create an array of photo objects for your gallery with screen dimensions
    const photoArray = imageArray.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;
          const aspectRatio = img.width / img.height;
  
          let dimensions;
  
          if (aspectRatio >= 1) {
            // Landscape image
            const maxWidth = screenWidth * 1; // Adjust the factor as needed
            const width = Math.min(img.width, maxWidth);
            const height = width / aspectRatio;
  
            dimensions = { w: width, h: height };
          } else {
            // Portrait image
            const maxHeight = screenHeight * 0.9; // Adjust the factor as needed
            const height = Math.min(img.height, maxHeight);
            const width = height * aspectRatio;
  
            dimensions = { w: width, h: height };
          }
  
          resolve({
            src: image,
            ...dimensions,
          });
        };
      });
    });
  
    Promise.all(photoArray).then((resolvedImages) => {
      setImages(resolvedImages);
    });
  }, []);
  
  
  
  
  
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= documentHeight - 100) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
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
    setSwipeInProgress(false);
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
        if (!swipeInProgress) {
          setCurrent((current + images.length - 1) % images.length);
          setSwipeInProgress(true);
        }
      } else if (touchDiff < 0) {
        if (!swipeInProgress) {
          setCurrent((current + 1) % images.length);
          setSwipeInProgress(true);
        }
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

  const imagesPerColumn = "";
  const totalColumns = "";

  const columnBreakpoints = {
    default: 3,
    1100: 3,
    700: 3,
    500: 3,
  };

  const columnClassName = "masonry-grid-column";



  const Footer = () => {
    return (
      <footer className="footer mt-auto">
        <div className="container mx-auto py-4">
          {/* Add your footer content here */}
          <div className="flex justify-center items-center">
            <img src={VSfoot} alt="Footer Image" className="w-20 h-20 mr-4" />
            <p className="text-center text-gray-600">
              
            </p>
          </div>
        </div>
      </footer>
    );
  };

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
            breakpointCols={columnBreakpoints}
            className="masonry-grid"
            columnClassName={columnClassName}
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
                <LazyLoadImage
                className="photo-image"
                src={image.src}
                alt={`Image ${index}`}
                effect="blur" // Apply a blur effect during loading
                loading="lazy" // Enable lazy loading
              />
              </div>
            ))}
          </Masonry>
          {current !== null && (
            <PhotoSwipeGallery
              isOpen={isModalOpen}
              items={images}
              options={{
                index: current,
                bgOpacity: 0.98,
                closeOnScroll: false,
                shareEl: false,
                preloaderEl: 2,
              }}
              onClose={closeSlideshow}
            />
          )}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Photos;