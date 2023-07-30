import React, { useState, useEffect } from "react";
import VSfoot from "../img/Photos/vsFoot.png";
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
import VS13  from "../img/Photos/V&S13.jpg";

const images = [VS1, VS2, VS3, VS4, VS5, VS6, VS8, VS9, VS10, VS11, VS12, VS13];
const ImageGallery = ({ onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(previousIndex);
  };

  const handleCloseModal = () => {
    setCurrentIndex(null);
  };

  if (currentIndex !== null) {
    return (
      <div style={modalStyle}>
        <div style={arrowStyleLeft} onClick={handlePreviousImage}>
          &#8249;
        </div>
        <div onClick={handleCloseModal}>
          <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} style={modalImageStyle} />
        </div>
        <div style={arrowStyleRight} onClick={handleNextImage}>
          &#8250;
        </div>
      </div>
    );
  }

  return (
    <div style={galleryStyle}>
      {images.map((image, index) => (
        <div key={index} style={imageContainerStyle} onClick={() => setCurrentIndex(index)}>
          <img src={image} alt={`Image ${index + 1}`} style={imageStyle} />
        </div>
      ))}
    </div>
  );
};

const Modal = ({ selectedImage, onCloseModal }) => {
  return (
    selectedImage && (
      <div style={modalStyle} onClick={onCloseModal}>
        <span style={closeBtnStyle}>&times;</span>
        <div style={centeredImageContainer}>
          <img src={selectedImage} alt="Selected" style={centeredImageStyle} />
        </div>
      </div>
    )
  );
};

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const loadedImages = await Promise.all(images.map((image) => import(`${image}`).then((module) => module.default)));
      setLoadedImages(loadedImages);
    };

    importImages();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @import url('https://use.typekit.net/upl4fxr.css');
          /* Add custom CSS styles for responsive images */
          .responsive-image {
            width: 100%;
            height: auto;
          }
          /* Gallery styles */
          .gallery {
            font-family: 'shelby', sans-serif;
            /* Add any other styles you want for the gallery here */
          }
        `}
      </style>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,400;1,400;1,600&display=swap');
        `}
      </style>

      <nav style={navbarStyle}>
        {/* Add your Navbar content here */}
        {/* For example: */}
        
      </nav>
      <div
      className='container mx-auto h-full flex flex-col'
        style={{
          background: '',
          display: 'flex',
          flexDirection: 'column', // Change flexDirection to column
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          top: -100,
          padding: "0% 0%",
        }}
      >
      <h3
        style={{
          textAlign: "center",
          fontFamily: "shelby, sans-serif",
          fontStyle: "normal",
          fontSize: "100px",
          color: "#000000",
        }}
      >
        <br />
        Photos
      </h3>
      </div>
      <div 
        style={{ marginTop: '20px', color: 'black',
              fontWeight: 'regular 400',
              fontFamily: 'cormorant infant',
              fontStyle: 'regular',
              textAlign: 'center',
              fontSize: '20px',
              position: 'relative',
              top: -150,
              
    }}>
     
          A trip down memory lane...
        </div>
      <div className="gallery"
      style={{position: 'relative', top: -100}} >
        <ImageGallery onImageClick={openModal} />
      </div>
      <Modal selectedImage={selectedImage} onCloseModal={closeModal} />

      {/* Footer */}
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
    </div>
  );
};

// Styles
const containerStyle = {
  display: "relative",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
  fontFamily: "Your-Font-Name, sans-serif", // Replace "Your-Font-Name" with the actual font name from Typekit
};

const galleryStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)", // Display three images in each row
  gap: "10px",
  padding: "10px",
  justifyContent: "center",
};

const imageContainerStyle = {
  cursor: "pointer",
};

const imageStyle = {
  maxWidth: "100%",
  height: "auto",

};

const modalStyle = {
  position: "fixed",
  top: 1,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const closeBtnStyle = {
  color: "white",
  fontSize: "30px",
  position: "relative",
  top: "20px",
  right: "20px",
  cursor: "pointer",
};

const modalImageStyle = {
  maxWidth: "50%",
  maxHeight: "50%",
  display: "block",
};

const navbarStyle = {
  width: "100%",
  height: "80px",
  backgroundColor: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
};




const arrowStyleLeft = {
  fontSize: "30px",
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  left: "20px",
  transform: "translateY(-50%)",
};

const arrowStyleRight = {
  fontSize: "30px",
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  right: "20px",
  transform: "translateY(-50%)",
};

const centeredImageContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50%",
};

const centeredImageStyle = {
  maxWidth: "50%",
  maxHeight: "50%",
  display: "block",
};


export default Photos;
