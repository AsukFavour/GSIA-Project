import { useState, useEffect, useRef } from "react";

export default function ClassOfferingsSection({ classes }) {
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
    <section ref={sectionRef} className="relative bg-gradient-to-br from-white via-indigo-50 to-purple-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className={`inline-block transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg uppercase tracking-wider">
              Our Programs
            </span>
          </div>
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 mb-3 sm:mb-4 px-4 transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Class Offerings
          </h2>
          
          <div className={`flex justify-center items-center gap-2 sm:gap-3 mt-4 sm:mt-6 transition-all duration-700 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-indigo-600 rounded"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-indigo-600 rounded-full"></div>
            <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gradient-to-l from-transparent to-indigo-600 rounded"></div>
          </div>
        </div>

        {/* Class Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <img
                  src={classItem.image}
                  alt={classItem.header}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/50 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                      {classItem.header}
                    </h3>
                    <p className="text-indigo-100 text-sm sm:text-base opacity-90">
                      {classItem.text}
                    </p>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}