import { useState, useEffect, useRef } from "react";

export default function ContactInfoSection({ campuses }) {
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
          <div className={`inline-block transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg uppercase tracking-wider">
              Our Locations
            </span>
          </div>
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 mb-3 sm:mb-4 px-4 transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Visit Our Campuses
          </h2>
          
          <div className={`flex justify-center items-center gap-2 sm:gap-3 mt-4 sm:mt-6 transition-all duration-700 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-purple-600 rounded"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-600 rounded-full"></div>
            <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gradient-to-l from-transparent to-purple-600 rounded"></div>
          </div>
        </div>

        {/* Campus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {campuses.map((campus, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8 transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-br-3xl opacity-10"></div>
              
              <div className="relative">
                {/* Campus Title */}
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl mr-4">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {campus.name}
                  </h3>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg mr-3 flex-shrink-0">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">Address</p>
                      <p className="text-sm sm:text-base text-gray-700 mt-1">{campus.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                    <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-lg mr-3 flex-shrink-0">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">Phone</p>
                      <a href={`tel:${campus.phone}`} className="text-sm sm:text-base text-gray-700 hover:text-indigo-600 transition-colors duration-300 mt-1 block">
                        {campus.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg mr-3 flex-shrink-0">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">Email</p>
                      <a href={`mailto:${campus.email}`} className="text-sm sm:text-base text-gray-700 hover:text-purple-600 transition-colors duration-300 mt-1 block">
                        {campus.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Decorative Bottom Border */}
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}