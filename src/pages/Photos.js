import React, { useState } from "react";
import Modal from "react-modal"; // Import the react-modal library

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
import VS13 from "../img/Photos/V&S13.jpg";

const Photos = () => {
  const [images, setImages] = useState([
    VS1, VS2, VS3, VS4, VS5, VS6, VS7, VS8, VS9, VS10, VS11, VS12, VS13
  ]);

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [modalIsOpen, setModalIsOpen] = useState(false); // State for controlling the modal visibility

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true); // Open the modal when an image is clicked
  };

  const closeModal = () => {
    setModalIsOpen(false); // Close the modal
  };

  const handlePrevImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const styles = `
  @import url('https://use.typekit.net/upl4fxr.css');




    .image-gallery {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .thumbnail-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      position: relative;
    }

    .thumbnail-container img {
      width: 100%;
      height: autopx;
      max-height: 100px;
      cursor: pointer;
      object-fit: cover; /* Maintain aspect ratio */
    }

    .thumbnail-container img.selected {
      border: 2px solid #ff5733;
    }

    .thumbnail-arrows {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: ${modalIsOpen ? "flex" : "none"};
      align-items: center;
    }

    .thumbnail-arrow {
      padding: 5px;
      background-color: rgba(255, 255, 255, 0.8);
      border: none;
      cursor: pointer;
    }

    /* Set 4 square columns for the thumbnails */
    @media (min-width: 768px) {
      .thumbnail-container {
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
      }

      .thumbnail-container img {
        height: 150px; /* Adjust the height for larger view */
      }
    }
    // Responsive styles for thumbnail images
    @media (max-width: 767px) {
      .thumbnail-container img {
        max-height: calc(50vh - 100px); // Adjust the maximum height based on viewport height
      }
    }
  

    /* Modal Styles */
    .image-modal {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .modal-image-container {
      position: relative;
    }

  
    body {
      font-family: 'Open Sans', sans-serif;
    }
    .modal-image {
      width: 100%;
      height: auto;
      max-height: 100vh;
      max-width: 90vw;
      object-fit: contain;
    }

    .modal-controls {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      display: flex;
      justify-content: space-between;
    }

    .modal-control-button {
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.8); /* Black background */
      color: #fff; /* White text */
      border: none;
      cursor: pointer;
    }

    .modal-close-button {
      position: absolute;
      top: 15px;
      right: 10px;
      padding: 5px;
      background-color: rgba(0, 0, 0, 0.8);
      border: none;
      cursor: pointer;

    }





    /* Navbar Styles */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: #000000; /* Black background */
    z-index: 10; /* Set a high z-index to place the navbar above other elements */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  `;

  return (

    <div>
    <style>{styles}</style>
    <div className="navbar">
      <div style={{ backgroundColor: "black", height: "80px" }}></div>
      <nav style={{ backgroundColor: "black", height: "80px" }}>
        {/* Your navigation bar content */}
      </nav>
    </div>
    <div className="image-gallery">
      <br/>
      <br/>
      <br/>
      <h2
        className="min-[0px]:text-[65px] md:text-[75px]"
        style={{
          textAlign: "center",
          fontFamily: "shelby, sans-serif",
          fontStyle: "normal",
          color: "#000000",
          marginTop: "20px", // Add margin to separate the heading from the images
        }}
      >

        Photos
      </h2>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={selectedImage === image ? "selected" : ""}
            onClick={() => handleImageClick(image)}
          />
        ))}
        <div className="thumbnail-arrows">
          <button className="thumbnail-arrow" onClick={handlePrevImage}>
            &lt;
          </button>
          <button className="thumbnail-arrow" onClick={handleNextImage}>
            &gt;
          </button>
        </div>
      </div>

      <br/>
      <br/>
      <br/>

      {/* Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="image-modal">
        <div className="modal-image-container">
          <img src={selectedImage} alt="Selected" className="modal-image" />
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

      {/* Footer */}
      <footer className="footer mt-auto">
        <div className="container mx-auto py-4">
          {/* Add your footer content here */}
          <div className="flex justify-center items-center">
            <img src={VSfoot} alt="Footer Image" className="w-20 h-20 mr-4" />
            <p className="text-center text-gray-600">
              {/* Your footer text here */}
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
  );
};

export default Photos;
