export default function PrincipalStatement({ principalImage, signatureImage }) {
  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg uppercase tracking-wider">
            Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 px-4">
            Statement from the Principal
          </h2>
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border border-purple-100">
          <div className="flex flex-col lg:flex-row">
            {/* Principal Image */}
            <div className="lg:w-2/5 relative">
              <div className="relative h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px]">
                <img
                  src={principalImage}
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-purple-900/30"></div>
                
                {/* Quote Icon */}
                <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl">
                  <i className="fas fa-quote-left text-white text-lg sm:text-xl md:text-2xl"></i>
                </div>
              </div>
            </div>

            {/* Statement Content */}
            <div className="lg:w-3/5 p-5 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="space-y-4 sm:space-y-6">
                {/* Quote */}
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed italic relative">
                  <span className="text-4xl sm:text-5xl md:text-6xl text-purple-300 absolute -top-2 sm:-top-4 -left-1 sm:-left-2">&ldquo;</span>
                  <span className="relative z-10">
                    Welcome to The Good Seed International Academy. We are committed to nurturing young minds with excellence, integrity, and faith. Our dedicated faculty and modern facilities provide an environment where students thrive academically, socially, and spiritually.
                  </span>
                  <span className="text-4xl sm:text-5xl md:text-6xl text-purple-300 absolute -bottom-6 sm:-bottom-8 right-0">&rdquo;</span>
                </p>

                {/* Signature */}
                <div className="pt-6 sm:pt-8 border-t border-purple-100">
                  <img
                    src={signatureImage}
                    alt="Principal Signature"
                    className="h-12 sm:h-14 md:h-16 mb-2 sm:mb-3"
                  />
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">Mrs. Principal Name</p>
                    <p className="text-purple-600 font-semibold text-sm sm:text-base">Principal, GSIA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

