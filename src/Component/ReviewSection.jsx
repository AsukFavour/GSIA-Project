import { useState, useEffect, useRef } from "react";

const ReviewSection = () => {
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

  const reviews = [
    {
      id: 1,
      author: 'Mrs. Adebayo',
      role: 'Parent',
      content: 'GSIA has been a transformative experience for my child. The faculty is dedicated, caring, and the curriculum is exceptionally well-designed. I couldn&apos;t be happier with our choice!',
      rating: 5,
      image: '👨‍💼',
      gradient: 'from-purple-600 to-indigo-600'
    },
    {
      id: 2,
      author: 'Mr. & Mrs. Okoro',
      role: 'Parents',
      content: 'We appreciate the supportive community at GSIA. The extracurricular activities are diverse, and the learning environment is excellent. Our children are thriving here!',
      rating: 5,
      image: '👩‍💼',
      gradient: 'from-indigo-600 to-violet-600'
    },
    {
      id: 3,
      author: 'Dr. Williams',
      role: 'Parent',
      content: 'Choosing GSIA for my children&apos;s education was the best decision. The infrastructure and facilities are top-notch, providing a truly holistic learning experience.',
      rating: 5,
      image: '👨‍🏫',
      gradient: 'from-violet-600 to-purple-600'
    },
  ];

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-white via-purple-50 to-indigo-50 py-20 px-6 sm:px-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block animate-fade-in-down">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-sm font-semibold mb-4 shadow-lg uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 mb-4 animate-fade-in-up animation-delay-200">
            What Parents Say About Us
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Hear from our community of satisfied parents who trust us with their children&apos;s education
          </p>

          {/* Decorative Line */}
          <div className="flex justify-center items-center gap-3 mt-6 animate-fade-in-up animation-delay-600">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-purple-600 rounded"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-purple-600 rounded"></div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`group relative transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card Container */}
              <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Gradient Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${review.gradient}`}></div>
                
                {/* Quote Icon Background */}
                <div className="absolute top-4 right-4 opacity-10">
                  <i className="fas fa-quote-right text-6xl text-purple-600"></i>
                </div>

                {/* Card Content */}
                <div className="relative p-8">
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <i 
                        key={i} 
                        className="fas fa-star text-yellow-400 text-lg transform group-hover:scale-110 transition-transform"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      ></i>
                    ))}
                  </div>

                  {/* Review Content */}
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    &ldquo;{review.content}&rdquo;
                  </p>

                  {/* Author Section */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    {/* Avatar */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${review.gradient} rounded-full flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      {review.image}
                    </div>
                    
                    {/* Author Info */}
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        {review.author}
                      </p>
                      <p className="text-sm text-purple-600 font-medium">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${review.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg">
            <i className="fas fa-star text-yellow-400 text-xl"></i>
            <p className="text-gray-700 font-semibold">
              Rated <span className="text-purple-700">5.0/5.0</span> by our community
            </p>
            <i className="fas fa-star text-yellow-400 text-xl"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
