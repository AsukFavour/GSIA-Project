import { useState, useEffect, useRef } from "react";

export default function MissionVisionSection({ missionImage, visionImage }) {
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
    <section ref={sectionRef} className="relative bg-gradient-to-br from-gray-50 to-purple-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-40 sm:h-40 border-2 sm:border-4 border-purple-600 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-60 sm:h-60 border-2 sm:border-4 border-indigo-600 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Mission */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
              {/* Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={missionImage}
                  alt="Our Mission"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center">
                    <i className="fas fa-bullseye text-white text-xl sm:text-2xl md:text-3xl"></i>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700 mb-3 sm:mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  The Good Seed International Academy is committed to creating the enabling environment for unparalleled academic excellence that will propel your child into the future of greatness.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
              {/* Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={visionImage}
                  alt="Our Vision"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center">
                    <i className="fas fa-eye text-white text-xl sm:text-2xl md:text-3xl"></i>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700 mb-3 sm:mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Our vision is to raise our children into a future of greatness, under the tutelage of qualified and God-fearing teachers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

