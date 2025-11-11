import { useState, useEffect, useRef } from "react";

export default function AdmissionWelcomeSection({ welcomeImage }) {
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
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className={`inline-block transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg uppercase tracking-wider">
              Join Our Community
            </span>
          </div>
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 mb-4 sm:mb-6 px-4 transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Welcome to Our School
          </h2>
          
          <p className={`text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8 transition-all duration-700 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            We are delighted to welcome you to our school&apos;s admissions page. Our mission is to provide a nurturing and challenging educational environment that prepares students for future success. Learn more about our unique approach to education and what makes our school special.
          </p>
        </div>

        {/* Image Card */}
        <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl transition-all duration-700 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
            <img
              src={welcomeImage}
              alt="School Campus"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-indigo-900/20 to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Start Your Journey Here</h3>
                <p className="text-indigo-100 text-sm sm:text-base">Building tomorrow&apos;s leaders today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}