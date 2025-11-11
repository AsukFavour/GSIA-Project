import { useState, useEffect, useRef } from "react";

export default function AdmissionRequirementsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const requirements = [
    {
      title: "Age Criteria",
      description: "Specific age requirements for each grade level",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Academic Records",
      description: "Transcripts or report cards from previous schools",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Entrance Exams",
      description: "Information on required entrance exams or assessments",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Recommendations",
      description: "Letters from teachers or other references",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Interviews",
      description: "Details about the interview process, if applicable",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      color: "from-teal-500 to-green-500"
    }
  ];

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
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className={`inline-block transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg uppercase tracking-wider">
              What You Need
            </span>
          </div>
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 mb-3 sm:mb-4 px-4 transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Admission Requirements
          </h2>
          
          <div className={`flex justify-center items-center gap-2 sm:gap-3 mt-4 sm:mt-6 transition-all duration-700 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-indigo-600 rounded"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-indigo-600 rounded-full"></div>
            <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gradient-to-l from-transparent to-indigo-600 rounded"></div>
          </div>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${requirement.color} rounded-xl mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {requirement.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                {requirement.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {requirement.description}
              </p>

              {/* Decorative Element */}
              <div className={`mt-4 w-16 h-1 bg-gradient-to-r ${requirement.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}