import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import IntroSection from './Introsection'
import ReviewSection from './ReviewSection';
import Footer from './Footer'
import gsiaImage from '../assets/image1.jpg'
import '../Styles/Home.css'

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.querySelector('.intro-section');
      const introSectionTop = introSection.getBoundingClientRect().top;
      const introSectionHeight = introSection.clientHeight;

      if (introSectionTop < window.innerHeight - introSectionHeight / 2) {
        introSection.classList.add('animated-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <Navbar/>
    <Jumbotron/>
    <div className="gsia-section">
      <h1 className='gs-hd1'>
        Welcome to 
      </h1>
      <h1 className='gs-hd2'>The Good Seed International Academy</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quisquam assumenda voluptatem, omnis nisi deserunt id nesciunt totam suscipit consequatur?</p>

    </div>
    <div className="card-section">
        <div className="card">
          <i className="fas fa-graduation-cap"></i>
          <h2>Enroll</h2>
        </div>
        <div className="card">
          <i className="fas fa-chalkboard-teacher"></i>
          <h2>Teach</h2>
        </div>
        <div className="card">
          <i className="fas fa-hands-helping"></i>
          <h2>Support</h2>
        </div>
        <div className="card">
          <i className="fas fa-seedling"></i>
          <h2>Grow</h2>
        </div>
      </div>
    <header className="header">
        <h1>DELIVERING A WELL-ROUNDED EDUCATION</h1>
      </header>
    <div className="home-page">
    
      <div className="image-section">
        <img src={gsiaImage} alt="GSIA" />
      </div>
      <div className="content-section">
        <div className="column">
          <h2>About GSIA</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        <div className="column">
          <h2>Our Vision</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam.
          </p>
        </div>
      </div>
    </div>
    
    <IntroSection/>
    <ReviewSection/>
    <Footer/>
    </>
  )
}

export default Home