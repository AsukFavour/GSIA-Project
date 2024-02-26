// src/Jumbotron.jsx
import React, { useState, useEffect } from 'react';
import '../Styles/Jumbotron.css';
import image1 from '../assets/collage/image1.jpg';
import image2 from '../assets/collage/image2.jpg';
import image3 from '../assets/collage/image3.jpg';

const carouselData = [
  {
    image: image1,
    title: 'Welcome to Our Website',
    text: 'Discover amazing content and services.',
  },
  {
    image: image2,
    title: 'Explore Exciting Features',
    text: 'Find new possibilities with our innovative tools.',
  },
  {
    image: image3,
    title: 'Join Our Community',
    text: 'Connect with like-minded individuals.',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
  };

  // Function to handle automatic sliding every 5 seconds
  const autoSlide = () => {
    nextSlide();
  };

  // Set up the interval when the component mounts
  useEffect(() => {
    const intervalId = setInterval(autoSlide, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentIndex]); // Include currentIndex as a dependency to prevent potential bugs

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={prevSlide}>&lt;</button>
      <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="content">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

function Jumbotron() {
  return (
    <div className="app">
      <Carousel />
    </div>
  );
}

export default Jumbotron;
