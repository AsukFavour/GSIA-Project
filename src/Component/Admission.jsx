import Navbar from '../Component/Navbar';
import Footer from './Footer';
import Banner from './Banner';
import AdmissionWelcomeSection from './Admission/AdmissionWelcomeSection';
import ApplicationProcessSection from './Admission/ApplicationProcessSection';
import AdmissionRequirementsSection from './Admission/AdmissionRequirementsSection';
// import ImportantDatesAndFAQSection from './Admission/ImportantDatesAndFAQSection';
// import TuitionAndTestimonialsSection from './Admission/TuitionAndTestimonialsSection';

// Images
import bannerImage from '../assets/collage/image1.jpg';
import welcomeImage from '../assets/collage/image2.jpg';
import processImage from '../assets/collage/image3.jpg';

const Admission = () => {
  return (
    <>
      <Navbar />
      <Banner backgroundImage={bannerImage} text="Admissions" />
      <AdmissionWelcomeSection welcomeImage={welcomeImage} />
      <ApplicationProcessSection processImage={processImage} />
      <AdmissionRequirementsSection />
      {/* <ImportantDatesAndFAQSection />
      <TuitionAndTestimonialsSection /> */}
      <Footer />
    </>
  );
};

export default Admission;