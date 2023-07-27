import React, { useState, useEffect } from "react";

const images = [
  "./img/Photos/V&S1.jpg",
  "./img/Photos/V&S2.jpg",
  "./img/Photos/V&S3.jpg",
  "./img/Photos/V&S4.jpg",
  "./img/Photos/V&S5.jpg",
  "./img/Photos/V&S6.jpg",
  "./img/Photos/V&S7.jpg",
  // Add more image filenames here
];

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const loadedImages = await Promise.all(
        images.map((image) => import(`${image}`).then((module) => module.default))
      );
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
      <div style={galleryStyle}>
        {loadedImages.map((image, index) => (
          <div key={index} style={imageContainerStyle} onClick={() => openModal(image)}>
            <img src={image} alt={`Image ${index + 1}`} style={imageStyle} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div style={modalStyle} onClick={closeModal}>
          <span style={closeBtnStyle}>&times;</span>
          <img src={selectedImage} alt="Selected" style={modalImageStyle} />
        </div>
      )}
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Adjust this to control the height of the image gallery container
};

const galleryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '10px',
  padding: '10px',
  justifyItems: 'center' // Center the gallery items horizontally
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
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
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
  display: 'block'
};

export default Photos;
