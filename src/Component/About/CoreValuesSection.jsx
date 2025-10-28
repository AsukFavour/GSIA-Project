import { useState, useEffect, useRef } from "react";

export default function CoreValuesSection({ coreValues }) {
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

  const icons = [
    'fa-trophy',
    'fa-shield-alt',
    'fa-lightbulb',
    'fa-users',
    'fa-hands-helping'
  ];

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg uppercase tracking-wider">
            Our Foundation
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Our Core Values
          </h2>
          
          <p className="text-purple-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            The principles that guide everything we do at GSIA
          </p>

          <div className="flex justify-center items-center gap-2 sm:gap-3 mt-4 sm:mt-6">
            <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-purple-400 rounded"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full"></div>
            <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gradient-to-l from-transparent to-purple-400 rounded"></div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Image Background */}
                <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.header}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/70 to-transparent"></div>
                  
                  {/* Number Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                    <span className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                      {value.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                      <i className={`fas ${icons[index]} text-white text-lg sm:text-xl md:text-2xl`}></i>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {value.header}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {value.text}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400 rounded-xl sm:rounded-2xl transition-colors duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

