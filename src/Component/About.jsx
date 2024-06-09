// About.js
 
import Navbar from '../Component/Navbar';
import Banner from './Banner';
import Footer from './Footer';
import '../Styles/About.css';
import collageImage1 from '../assets/collage/image1.jpg';
import collageImage2 from '../assets/collage/image2.jpg';
import collageImage3 from '../assets/collage/image3.jpg';
import collageImage4 from '../assets/collage/image4.jpg';
import missionImage from '../assets/collage/image4.jpg';
import visionImage from '../assets/collage/image5.jpg';
import principalImage from '../assets/principal.jpg';
import coreValueImage1 from '../assets/collage/image1.jpg';
import coreValueImage2 from '../assets/collage/image1.jpg';
import coreValueImage3 from '../assets/collage/image1.jpg';
import coreValueImage4 from '../assets/collage/image1.jpg';
import coreValueImage5 from '../assets/collage/image1.jpg';
import signatureImage from '../assets/signature.png';

function About() {

  const coreValues = [
    { number: '1', header: 'Excellence', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: coreValueImage1 },
    { number: '2', header: 'Integrity', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: coreValueImage2 },
    { number: '3', header: 'Innovation', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: coreValueImage3 },
    { number: '4', header: 'Diversity', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: coreValueImage4 },
    { number: '5', header: 'Community', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: coreValueImage5 },
  ];
  return (
    <>
      <Navbar />
      <Banner backgroundImage={collageImage2} text="About GSIA" />

      {/* Collage Grid */}
      <div className="about-section">
        <h2 className="section-header">Our College</h2>
        <div className="collage-grid">
          <img src={collageImage1} alt="Collage Image" className="collage-image" />
          <img src={collageImage2} alt="Collage Image" className="collage-image" />
          <img src={collageImage3} alt="Collage Image" className="collage-image" />
          <img src={collageImage4} alt="Collage Image" className="collage-image" />
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2 className="section-header">About GSIA</h2>
        <p className="section-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod sem at magna ullamcorper,
          id fringilla arcu gravida. Suspendisse potenti. Sed at libero euismod, fermentum orci a, vehicula
          nisl. Quisque nec fermentum libero.
        </p>
      </div>

      {/* Mission Section */}
      <div className="about-sub">
      <div className="about-section">
        <h2 className="section-header">Our Mission</h2>
        <img src={missionImage} alt="Mission" className="collage-image-bn" />
        <p className="section-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod sem at magna ullamcorper,
          id fringilla arcu gravida. Suspendisse potenti. Sed at libero euismod, fermentum orci a, vehicula
          nisl. Quisque nec fermentum libero.
        </p>
      </div>

      {/* Vision Section */}
      <div className="about-section">
        <h2 className="section-header">Our Vision</h2>
        <img src={visionImage} alt="Vision" className="collage-image-bn" />
        <p className="section-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod sem at magna ullamcorper,
          id fringilla arcu gravida. Suspendisse potenti. Sed at libero euismod, fermentum orci a, vehicula
          nisl. Quisque nec fermentum libero.
        </p>
      </div>
      
    </div>

    <div className="about-section prin">
        <h2 className="section-header">Statement from the Principal</h2>
        <div className="principal-statement">
          <img src={principalImage} alt="Principal" className="principal-image" />
          <div className="inner-statment">
          <p className="principal-text">
            <em>
               &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod sem at magna ullamcorper,
              id fringilla arcu gravida. Suspendisse potenti. Sed at libero euismod, fermentum orci a, vehicula
              nisl. Quisque nec fermentum libero. &quot;
            </em>
          </p>
          <img src={signatureImage} alt="Principal's Signature" className="signature-image" />
        </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="about-section">
        <h2 className="section-header">Our Core Values</h2>
        <div className="core-values-grid">
          {coreValues.map((coreValue, index) => (
            <div className="core-value-card" key={index}>
              <div className="overlay"></div>
              <img src={coreValue.image} alt={`Core Value ${coreValue.number}`} className="core-value-image" />
              <div className="card-content">
                <div className="number">{coreValue.number}</div>
                <h3 className="card-header">{coreValue.header}</h3>
                <p className="card-text">{coreValue.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
