import Navbar from '../Component/Navbar';
import Banner from './Banner';
import Footer from './Footer';
import CollageSection from './About/CollageSection';
import AboutGSIASection from './About/AboutGSIASection';
import MissionVisionSection from './About/MissionVisionSection';
import PrincipalStatement from './About/PrincipalStatement';
import CoreValuesSection from './About/CoreValuesSection';

// Images
import collageImage1 from '../assets/collage/image1.jpg';
import collageImage2 from '../assets/collage/image2.jpg';
import collageImage3 from '../assets/collage/image3.jpg';
import collageImage4 from '../assets/collage/image4.jpg';
import missionImage from '../assets/collage/image4.jpg';
import visionImage from '../assets/collage/image5.jpg';
import principalImage from '../assets/principal.jpg';
import coreValueImage1 from '../assets/collage/image1.jpg';
import coreValueImage2 from '../assets/collage/image2.jpg';
import coreValueImage3 from '../assets/collage/image3.jpg';
import coreValueImage4 from '../assets/collage/image4.jpg';
import coreValueImage5 from '../assets/collage/image5.jpg';
import signatureImage from '../assets/signature.png';

function About() {
  const collageImages = [collageImage1, collageImage2, collageImage3, collageImage4];

  const coreValues = [
    { 
      number: '1', 
      header: 'Excellence', 
      text: 'We strive for academic excellence and continuous improvement in all aspects of education.', 
      image: coreValueImage1 
    },
    { 
      number: '2', 
      header: 'Integrity', 
      text: 'We uphold honesty, transparency, and strong moral principles in everything we do.', 
      image: coreValueImage2 
    },
    { 
      number: '3', 
      header: 'Innovation', 
      text: 'We embrace creative thinking and modern educational approaches to enhance learning.', 
      image: coreValueImage3 
    },
    { 
      number: '4', 
      header: 'Diversity', 
      text: 'We celebrate and respect the unique backgrounds and perspectives of every student.', 
      image: coreValueImage4 
    },
    { 
      number: '5', 
      header: 'Community', 
      text: 'We foster a supportive environment where students, parents, and staff work together.', 
      image: coreValueImage5 
    },
  ];

  return (
    <>
      <Navbar />
      <Banner backgroundImage={collageImage2} text="About GSIA" />
      <CollageSection images={collageImages} />
      <AboutGSIASection />
      <MissionVisionSection missionImage={missionImage} visionImage={visionImage} />
      <PrincipalStatement principalImage={principalImage} signatureImage={signatureImage} />
      <CoreValuesSection coreValues={coreValues} />
      <Footer />
    </>
  );
}

export default About;
