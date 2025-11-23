// Gallery.js
import { useState, useEffect, useRef } from 'react';
import Navbar from '../Component/Navbar';
import Banner from './Banner';
import Footer from './Footer';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

// Sample images
import bannerImage from '../../public/gsia/gsia2.jpg';
import image1 from '../../public/gsia/gsia2.jpg';
import image2 from '../../public/gsia/gsia4.jpg';
import image3 from '../../public/gsia/gsia1.jpg';
import image4 from '../../public/gsia/gsia3.jpg';
import image5 from '../../public/gsia/gsia5.jpg';

const images = [
  { src: image1, title: 'Campus Life', category: 'Campus' },
  { src: image2, title: 'Learning Together', category: 'Academics' },
  { src: image3, title: 'School Events', category: 'Events' },
  { src: image4, title: 'Student Activities', category: 'Activities' },
  { src: image5, title: 'Community', category: 'Community' },
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const onOpenModal = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const categories = ['All', ...new Set(images.map(img => img.category))];
  
  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <>
      <Navbar />
      <Banner backgroundImage={bannerImage} text="Gallery" />
      
      <section ref={sectionRef} className="relative bg-gradient-to-br from-white via-purple-50 to-indigo-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className={`inline-block transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg uppercase tracking-wider">
                Our Memories
              </span>
            </div>
            
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 mb-3 sm:mb-4 px-4 transition-all duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Photo Gallery
            </h2>
            
            <div className={`flex justify-center items-center gap-2 sm:gap-3 mt-4 sm:mt-6 transition-all duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-purple-600 rounded"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-600 rounded-full"></div>
              <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gradient-to-l from-transparent to-purple-600 rounded"></div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 transition-all duration-700 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
                onClick={() => onOpenModal(image)}
              >
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
                      {image.title}
                    </h3>
                    <p className="text-purple-200 text-xs sm:text-sm">
                      {image.category}
                    </p>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Modal Styles */}
      <Modal 
        open={open} 
        onClose={onCloseModal} 
        center
        classNames={{
          overlay: 'custom-overlay',
          modal: 'custom-modal',
        }}
      >
        <div className="p-4">
          <img 
            src={selectedImage?.src} 
            alt={selectedImage?.title}
            className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
          />
          {selectedImage && (
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {selectedImage.category}
              </p>
            </div>
          )}
        </div>
      </Modal>

      <Footer />

      <style >{`
        .custom-overlay {
          background: rgba(79, 70, 229, 0.75);
          backdrop-filter: blur(4px);
        }
        .custom-modal {
          background: white;
          border-radius: 1rem;
          padding: 0;
          max-width: 90vw;
        }
      `}</style>
    </>
  );
}

export default Gallery;