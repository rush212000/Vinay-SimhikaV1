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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', padding: '10px' }}>
        {images.map((image, index) => (
          <div key={index} style={{ cursor: 'pointer' }} onClick={() => openModal(image)}>
            <img src={image} alt={`Image ${index + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        ))}
      </div>

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <span style={{ color: 'white', fontSize: '30px', position: 'absolute', top: '20px', right: '20px', cursor: 'pointer' }} onClick={closeModal}>&times;</span>
          <img src={selectedImage} alt="Selected" style={{ maxWidth: '90%', maxHeight: '90%', display: 'block', margin: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default Photos;
