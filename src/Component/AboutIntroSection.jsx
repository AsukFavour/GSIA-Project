import { useState, useEffect, useRef } from "react";
import gsiaImage from "../assets/image1.jpg";

export default function AboutIntroSection() {
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
    <section className="relative overflow-hidden">
      {/* Header Section with Gradient */}
      <header className="relative py-16 bg-gradient-to-r from-purple-50 via-white to-indigo-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
        
        <div className="relative z-10 text-center px-4">
          <div className="inline-block animate-fade-in-down">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-xs font-semibold mb-4 shadow-lg uppercase tracking-wider">
              Our Commitment
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 animate-fade-in-up animation-delay-200 leading-tight">
            DELIVERING A WELL-ROUNDED EDUCATION
          </h1>
          <div className="flex justify-center items-center gap-3 mt-6 animate-fade-in-up animation-delay-400">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-purple-600 rounded"></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-purple-600 rounded"></div>
          </div>
        </div>
      </header>

      {/* About Section with Enhanced Design */}
      <div ref={sectionRef} className="relative bg-gradient-to-br from-gray-50 to-purple-50 py-20 px-6 sm:px-10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 border-4 border-purple-600 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 border-4 border-indigo-600 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image Section with Animation */}
            <div className={`flex-1 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="relative group">
                {/* Decorative Border */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
                
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={gsiaImage}
                    alt="GSIA"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-600 to-indigo-700 text-white px-6 py-4 rounded-2xl shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <p className="text-3xl font-bold">2009</p>
                    <p className="text-xs uppercase tracking-wider">Established</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section with Animation */}
            <div className={`flex-1 space-y-10 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              {/* About GSIA */}
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                    <i className="fas fa-school text-white text-xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">
                    About GSIA
                  </h2>
                </div>
                <div className="pl-0 lg:pl-15">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The Good Seed International Academy is a learning and educational
                    development institution founded in <span className="font-bold text-purple-700">2009</span> to promote the forthright
                    development of the Nigerian child by adopting the latest
                    techniques and tested educational tools available today to develop
                    children into a future of greatness devoid of dubious and
                    unethical methodology and costly shortcuts.
                  </p>
                </div>
              </div>

              {/* Our Vision */}
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                    <i className="fas fa-eye text-white text-xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700">
                    Our Vision
                  </h2>
                </div>
                <div className="pl-0 lg:pl-15">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Our vision is to raise our children into a future of greatness,
                    under the tutelage of qualified and God-fearing teachers.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </button>
                <button className="px-8 py-4 bg-white text-purple-700 border-2 border-purple-600 rounded-xl font-semibold shadow-lg hover:bg-purple-50 transform hover:-translate-y-1 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro/Banner Section with Parallax Effect */}
      <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-4 animate-fade-in-down">
              <i className="fas fa-graduation-cap text-4xl text-purple-300"></i>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up animation-delay-200">
              This is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">your school.</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-purple-100 font-light leading-relaxed animate-fade-in-up animation-delay-400">
              This is your journey. This is the extraordinary opportunity your story deserves.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-12 animate-fade-in-up animation-delay-600">
              <div className="group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 group-hover:scale-110 transition-transform">
                  15+
                </div>
                <div className="text-sm text-purple-200 mt-2 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 group-hover:scale-110 transition-transform">
                  500+
                </div>
                <div className="text-sm text-purple-200 mt-2 uppercase tracking-wider">Students</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 group-hover:scale-110 transition-transform">
                  100%
                </div>
                <div className="text-sm text-purple-200 mt-2 uppercase tracking-wider">Dedicated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

