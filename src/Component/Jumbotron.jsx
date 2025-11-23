import { useState, useEffect } from "react";
import gsia1 from "../../public/gsia/gsia4.jpg";
import gsia2 from "../../public/gsia/gsia2.jpg";
import gsia3 from "../../public/gsia/gsia3.jpg";

const carouselData = [
  { image: gsia1 },
  { image: gsia2 },
  { image: gsia3 }
];

export default function Jumbotron() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length)
  }

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="relative bg-gray-200 overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-screen max-h-[600px]">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselData.map((slide, index) => (
            <div
              key={index}
              className="relative min-w-full flex-none bg-cover bg-center h-full"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 z-0"></div>
              
              {/* Left Content Section */}
              <div className="absolute left-0 top-0 h-full w-full md:w-1/2 flex items-center z-10">
                <div className="px-8 md:px-16 lg:px-24">
                  <p className="text-purple-400 text-sm font-medium mb-2">Welcome To Our Website</p>
                  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                    Bring Fun Life To<br />Your Kids
                  </h1>
                  <p className="text-white text-lg mb-8">Amazing Playground for your kids</p>
                  <a
                    href="#learn-more"
                    className="inline-block bg-purple-600 px-8 py-4 text-sm font-semibold text-white rounded shadow-lg hover:bg-purple-700 transition-colors no-underline uppercase tracking-wide"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-8 md:left-24 flex gap-2 z-20">
          {carouselData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-purple-600 w-8' : 'bg-white/50'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}