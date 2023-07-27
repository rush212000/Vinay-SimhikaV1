import React, { useState } from "react";

const images = [
  "./img/Photos/V&S1.jpg",
  "./img/Photos/V&S2.jpg",
  "./img/Photos/V&S3.jpg",
  "./img/Photos/V&S4.jpg",
  "./img/Photos/V&S5.jpg",
  "./img/Photos/V&S6.jpg",
  "./img/Photos/V&S7.jpg"
  // Add more image URLs here
];

const Photos = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div style={galleryStyle}>
        {images.map((image, index) => (
          <div key={index} style={imageContainerStyle} onClick={() => openModal(image)}>
            <img src={image} alt={`Image ${index + 1}`} style={imageStyle} />
          </div>
        ))}
      </div>

      {showModal && (
        <div style={modalStyle}>
          <span style={closeBtnStyle} onClick={closeModal}>&times;</span>
          <img src={selectedImage} alt="Selected" style={modalImageStyle} />
        </div>
      )}
    </div>
  );
};

// Styles
const galleryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '10px',
  padding: '10px'
};

const imageContainerStyle = {
  cursor: 'pointer'
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto'
};

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)'
};

const closeBtnStyle = {
  color: 'white',
  fontSize: '30px',
  position: 'absolute',
  top: '20px',
  right: '20px',
  cursor: 'pointer'
};

const modalImageStyle = {
  maxWidth: '90%',
  maxHeight: '90%',
  display: 'block',
  margin: 'auto'
};

export default Photos;
