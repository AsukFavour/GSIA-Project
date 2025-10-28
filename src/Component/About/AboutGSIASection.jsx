export default function AboutGSIASection() {
  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg uppercase tracking-wider">
              Who We Are
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 mb-4 sm:mb-6 px-4">
            About GSIA
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-purple-100">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-school text-white text-base sm:text-xl"></i>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                The Good Seed International Academy is a learning and educational
                development institution founded in <span className="font-bold text-purple-700">2009</span> to promote the forthright
                development of the Nigerian child by adopting the latest techniques
                and tested educational tools available today to develop children
                into a future of greatness devoid of dubious and unethical
                methodology and costly shortcuts.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-indigo-100">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-praying-hands text-white text-base sm:text-xl"></i>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                Good Seed International Academy is established on strong Christian principles and sound moral values based on time-tested biblical principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

