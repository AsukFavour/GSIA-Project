'use client'

import  { useState, useEffect } from 'react'
import image1 from '../assets/collage/image1.jpg'
import image2 from '../assets/collage/image2.jpg'
import image3 from '../assets/collage/image3.jpg'

const carouselData = [
  {
    image: image1,
    title: 'Welcome to Our School',
    text: 'Empowering students for a brighter future.',
  },
  {
    image: image2,
    title: 'Discover Your Potential',
    text: 'Join a community of excellence and innovation.',
  },
  {
    image: image3,
    title: 'Shape Your Dreams',
    text: 'Experience world-class education and opportunities.',
  },
]

export default function Jumbotron() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length)
  }

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="relative bg-gray-900 text-white py-4">
      {/* Carousel Container */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselData.map((slide, index) => (
            <div
              key={index}
              className="relative min-w-full flex-none bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                height: '500px',
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
              {/* Text Content */}
              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 sm:px-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{slide.title}</h2>
                <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-2xl">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 p-3 rounded-full text-white hover:bg-black/50"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 p-3 rounded-full text-white hover:bg-black/50"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="flex justify-center mt-8 gap-6">
        <a
          href="#admissions"
          className="inline-block bg-indigo-600 px-6 py-3 text-sm no-underline font-semibold text-white rounded-lg shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
        >
          Apply Now
        </a>
        <a
          href="#learn-more"
          className="inline-block px-6 py-3 text-sm no-underline font-semibold text-indigo-600 border border-indigo-600 rounded-lg shadow-md hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}
