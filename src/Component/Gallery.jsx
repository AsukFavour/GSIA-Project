// Gallery.js
import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Footer from './Footer';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import '../Styles/Gallery.css';

// Sample images
import image1 from '../assets/collage/image1.jpg';
import image2 from '../assets/collage/image2.jpg';
import image3 from '../assets/collage/image3.jpg';
import image4 from '../assets/collage/image4.jpg';
import image5 from '../assets/collage/image5.jpg';

const images = [image1, image2, image3, image4, image5];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const onOpenModal = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="gallery-container">
        <h2>Gallery</h2>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Image ${index}`} onClick={() => onOpenModal(image)} />
            </div>
          ))}
        </div>
        <Modal open={open} onClose={onCloseModal} center>
          <img src={selectedImage} alt="Full Image" />
        </Modal>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
