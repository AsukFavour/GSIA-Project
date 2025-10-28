export default function WelcomeSection() {
  const cards = [
    { 
      icon: "fa-graduation-cap", 
      title: "Enroll",
      description: "Join our community of learners",
      gradient: "from-purple-600 to-purple-800"
    },
    { 
      icon: "fa-chalkboard-teacher", 
      title: "Teach",
      description: "Inspire the next generation",
      gradient: "from-indigo-600 to-indigo-800"
    },
    { 
      icon: "fa-hands-helping", 
      title: "Support",
      description: "Be part of our mission",
      gradient: "from-violet-600 to-violet-800"
    },
    { 
      icon: "fa-seedling", 
      title: "Grow",
      description: "Nurture potential & excellence",
      gradient: "from-purple-700 to-purple-900"
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* GSIA Welcome Section with Gradient Background */}
      <div className="relative bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 py-16 px-4 sm:px-10">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-6">
          {/* Animated Welcome Text */}
          <div className="animate-fade-in-down">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4 shadow-sm">
              Excellence in Education
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-600 animate-fade-in-up animation-delay-200">
            Welcome to
          </h1>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 leading-tight animate-fade-in-up animation-delay-400">
            The Good Seed International Academy
          </h2>
          
          <p className="text-lg sm:text-xl font-medium text-gray-700 mt-6 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
            Where raising tomorrow&apos;s leaders is our top priority
          </p>
          
          {/* Decorative Line */}
          <div className="flex justify-center items-center gap-3 mt-8 animate-fade-in-up animation-delay-800">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-purple-600 rounded"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-purple-600 rounded"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Card Section */}
      <div className="bg-white py-16 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center p-8 text-center h-full">
                  {/* Icon Container */}
                  <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <i className={`fas ${card.icon} text-white text-5xl sm:text-6xl relative z-10 drop-shadow-lg`}></i>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-purple-100 text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                    {card.description}
                  </p>
                  
                  {/* Hover Arrow */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <i className="fas fa-arrow-right text-white text-xl"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

