import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import LazyImg from "react-lazyimg-component";
import "./Photos.css";
import VSfoot from '../img/Photos/vsFoot.png';
import { imageArray } from "./PhotosImports";
import { Fade } from "react-awesome-reveal";
import FsLightbox from "fslightbox-react";

function Photos() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    const photoArray = imageArray.map((image) => ({ src: image }));
    setImages(photoArray);
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

  const openSlideshow = (index) => {
    setCurrentImageIndex(index);
    setToggler(!toggler);
  };

  const columnBreakpoints = {
    default: 3,
    1100: 3,
    700: 3,
    500: 3,
  };

  const columnClassName = "masonry-grid-column";

  const Footer = () => (
    <footer className="footer mt-auto">
      <div className="container mx-auto py-4">
        <div className="flex justify-center items-center">
          <img src={VSfoot} alt="Footer Image" className="w-20 h-20 mr-4" />
          <p className="text-center text-gray-600"></p>
        </div>
      </div>
    </footer>
  );

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
              >
                <Fade>
                  <LazyImg
                    className="photo-image"
                    src={image.src}
                    alt={`Image ${index}`}
                  />
                </Fade>
              </div>
            ))}
          </Masonry>

          <FsLightbox
            toggler={toggler}
            sources={images.map((image) => image.src)}
            sourceIndex={currentImageIndex !== null ? currentImageIndex : 0}
          />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Photos;
