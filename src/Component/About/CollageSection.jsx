import { useState, useEffect, useRef } from "react";

export default function CollageSection({ images }) {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-white via-purple-50 to-indigo-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block animate-fade-in-down">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg uppercase tracking-wider">
              Campus Life
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 mb-3 sm:mb-4 animate-fade-in-up animation-delay-200 px-4">
            Our Campus
          </h2>
          
          <div className="flex justify-center items-center gap-2 sm:gap-3 mt-4 sm:mt-6 animate-fade-in-up animation-delay-400">
            <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-purple-600 rounded"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-600 rounded-full"></div>
            <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gradient-to-l from-transparent to-purple-600 rounded"></div>
          </div>
        </div>

        {/* Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={image}
                  alt={`Campus ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">Campus Life</h3>
                  <p className="text-purple-100 text-xs sm:text-sm">Explore our beautiful facilities</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

