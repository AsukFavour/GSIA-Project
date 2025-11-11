import { useState, useEffect, useRef } from "react";

export default function EducationalPhilosophy() {
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
    <section ref={sectionRef} className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className={`inline-block transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg uppercase tracking-wider">
              Our Philosophy
            </span>
          </div>
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 mb-3 sm:mb-4 px-4 transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Educational Philosophy
          </h2>
          
          <div className={`flex justify-center items-center gap-2 sm:gap-3 mt-4 sm:mt-6 transition-all duration-700 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-indigo-600 rounded"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-indigo-600 rounded-full"></div>
            <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gradient-to-l from-transparent to-indigo-600 rounded"></div>
          </div>
        </div>

        {/* Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* First Quote */}
          <div className={`group relative bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8 transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}>
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-br-3xl opacity-10"></div>
            <div className="relative">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                The aim of education should be to teach us rather how to think, than what to think – rather to improve our minds, so as to enable us to think for ourselves, than to load the memory with thoughts of other men.
              </p>
              <div className="flex items-center">
                <div className="h-0.5 w-8 bg-gradient-to-r from-indigo-500 to-transparent mr-3"></div>
                <p className="text-indigo-600 font-semibold text-sm sm:text-base italic">John Dewey</p>
              </div>
            </div>
          </div>

          {/* Second Quote */}
          <div className={`group relative bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8 transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}>
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-br-3xl opacity-10"></div>
            <div className="relative">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-purple-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                Education is the most powerful weapon which you can use to change the world.
              </p>
              <div className="flex items-center">
                <div className="h-0.5 w-8 bg-gradient-to-r from-purple-500 to-transparent mr-3"></div>
                <p className="text-purple-600 font-semibold text-sm sm:text-base italic">Nelson Mandela</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}