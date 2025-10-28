import  { useEffect } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import ReviewSection from "./ReviewSection";
import Footer from "./Footer";
import gsiaImage from "../assets/image1.jpg";

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.querySelector(".intro-section");
      const introSectionTop = introSection.getBoundingClientRect().top;
      const introSectionHeight = introSection.clientHeight;

      if (introSectionTop < window.innerHeight - introSectionHeight / 2) {
        introSection.classList.add("animated-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Jumbotron />
      {/* GSIA Section */}
      <div className="text-center py-12 px-4 sm:px-10 bg-gray-100">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2 animate-fade-up">Welcome to</h1>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1f2544]">The Good Seed International Academy</h1>
        <h4 className="text-lg sm:text-xl font-medium text-gray-700 mt-4">
          Where raising tomorrow&apos;s leaders is our top priority.
        </h4>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 px-6 bg-white">
        {[
          { icon: "fa-graduation-cap", title: "Enroll" },
          { icon: "fa-chalkboard-teacher", title: "Teach" },
          { icon: "fa-hands-helping", title: "Support" },
          { icon: "fa-seedling", title: "Grow" },
        ].map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-[#1f2544] rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
          >
            <i className={`fas ${card.icon} text-white text-4xl mb-4`}></i>
            <h2 className="text-lg font-semibold text-white">{card.title}</h2>
          </div>
        ))}
      </div>

      {/* Header Section */}
      <header className="text-center py-10 bg-white text-[#1f2544]">
        <h1 className="text-3xl font-bold">DELIVERING A WELL-ROUNDED EDUCATION</h1>
      </header>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 py-12 px-6 bg-gray-50">
        <div className="flex-1">
          <img
            src={gsiaImage}
            alt="GSIA"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1f2544]">About GSIA</h2>
            <p className="text-gray-700 mt-4">
              The Good Seed International Academy is a learning and educational
              development institution founded in 2009 to promote the forthright
              development of the Nigerian child by adopting the latest
              techniques and tested educational tools available today to develop
              children into a future of greatness devoid of dubious and
              unethical methodology and costly shortcuts.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1f2544]">Our Vision</h2>
            <p className="text-gray-700 mt-4">
              Our vision is to raise our children into a future of greatness,
              under the tutelage of qualified and God-fearing teachers.
            </p>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="relative bg-[#1f2544] text-white py-24">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold">This is your school.</h1>
          <p className="mt-4 text-lg">
            This is your journey. This is the extraordinary opportunity your
            story deserves.
          </p>
        </div>
      </div>

      <ReviewSection />
      <Footer />
    </>
  );
}

export default Home;
