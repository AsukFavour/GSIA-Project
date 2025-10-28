import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import WelcomeSection from "./WelcomeSection";
import AboutIntroSection from "./AboutIntroSection";
import ReviewSection from "./ReviewSection";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <WelcomeSection />
      <AboutIntroSection />
      <ReviewSection />
      <Footer />
    </>
  );
}

export default Home;
