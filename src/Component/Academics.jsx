// Academics.js
import Navbar from "../Component/Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import bannerimage from "../assets/collage/image3.jpg";
import preNurseryImage from "../assets/class/class0.jpg";
import nurseryImage from "../assets/class/class1.jpg";
import primaryImage from "../assets/class/class2.jpg";
import juniorSecondaryImage from "../assets/class/class3.jpg";
import campusImage1 from "../assets/campus/image11.jpg";
import campusImage2 from "../assets/campus/image11.jpg";
import sportsImage from "../assets/sports.jpg";
import excursionImage from "../assets/excursion.jpg";
import interschoolClubsImage from "../assets/clubs.jpg";
import communityServicesImage from "../assets/community.jpg";
import "../Styles/Academics.css";

export default function Academics() {
  return (
    <>
      <Navbar />
      <Banner backgroundImage={bannerimage} text="Academics" />

      <div className="acd-intro">
        <h1 className="acd-header">Educational Philosophy</h1>
        <p className="acd-content">
          The aim of education should be to teach us rather how to think, than
          what to think – rather to improve our minds, so as to enable us to
          think for ourselves, than to load the memory with thoughts of other
          men.- <i>John Dewey</i>
        </p>
        <p className="acd-content">
          Education is the most powerful weapon which you can use to change the
          world. - <i>Nelson Mandela </i>
        </p>
      </div>

      {/* Class Cards Section */}
      <div className="class-cards-section">
        <h2 className="section-header">Class Offerings</h2>
        <div className="class-cards">
          <div
            className="class-card"
            style={{ backgroundImage: `url(${preNurseryImage})` }}
          >
            <h3 className="card-header">Pre-Nursery</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div
            className="class-card"
            style={{ backgroundImage: `url(${nurseryImage})` }}
          >
            <h3 className="card-header">Nursery</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div
            className="class-card"
            style={{ backgroundImage: `url(${primaryImage})` }}
          >
            <h3 className="card-header">Primary</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div
            className="class-card"
            style={{ backgroundImage: `url(${juniorSecondaryImage})` }}
          >
            <h3 className="card-header">Junior Secondary</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Campus Section */}
      <div className="campus-section">
        <h2 className="section-header">Our Campuses</h2>
        <div className="campus-info">
          <div className="campus">
            <img
              src={campusImage1}
              alt="Woji Campus"
              className="campus-image"
            />
            <p className="campus-text">Woji Campus</p>
          </div>
          <div className="campus">
            <img
              src={campusImage2}
              alt="Ireibe Campus"
              className="campus-image"
            />
            <p className="campus-text">Ireibe Campus</p>
          </div>
        </div>
      </div>

      {/* Other School Activities Section */}
      <div className="other-activities-section">
        <h2 className="section-header">Other School Activities</h2>
        <div className="activity-grid">
          <div className="activity-card">
            <img
              src={sportsImage}
              alt="Sports and Games"
              className="activity-image"
            />
            <h3 className="activity-header">Sports and Games</h3>
            <p className="activity-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="activity-card">
            <img
              src={excursionImage}
              alt="Excursion"
              className="activity-image"
            />
            <h3 className="activity-header">Excursion</h3>
            <p className="activity-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="activity-card">
            <img
              src={interschoolClubsImage}
              alt="Interschool Clubs"
              className="activity-image"
            />
            <h3 className="activity-header">Interschool Clubs</h3>
            <p className="activity-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="activity-card">
            <img
              src={communityServicesImage}
              alt="Community Services"
              className="activity-image"
            />
            <h3 className="activity-header">Community Services</h3>
            <p className="activity-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
