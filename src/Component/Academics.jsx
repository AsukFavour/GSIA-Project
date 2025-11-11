// Academics.js
import Navbar from "../Component/Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import EducationalPhilosophy from "./Academics/EducationalPhilosophy";
import ClassOfferingsSection from "./Academics/ClassOfferings";
import CampusSection from "./Academics/Campuses";
import ActivitiesSection from "./Academics/SchoolActivities";

// Images
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

export default function Academics() {
  // Class data
  const classes = [
    {
      header: "Pre-Nursery",
      text: "Building foundational skills through play-based learning and nurturing care.",
      image: preNurseryImage,
    },
    {
      header: "Nursery",
      text: "Developing early literacy, numeracy, and social skills in a supportive environment.",
      image: nurseryImage,
    },
    {
      header: "Primary",
      text: "Comprehensive education fostering academic excellence and character development.",
      image: primaryImage,
    },
    {
      header: "Junior Secondary",
      text: "Preparing students for senior secondary with rigorous academics and guidance.",
      image: juniorSecondaryImage,
    },
  ];

  // Campus data
  const campuses = [
    {
      name: "Woji Campus",
      image: campusImage1,
    },
    {
      name: "Ireibe Campus",
      image: campusImage2,
    },
  ];

  // Activities data
  const activities = [
    {
      header: "Sports and Games",
      text: "Promoting physical fitness, teamwork, and healthy competition through various sports.",
      image: sportsImage,
    },
    {
      header: "Excursion",
      text: "Educational trips that bring learning to life through real-world experiences.",
      image: excursionImage,
    },
    {
      header: "Interschool Clubs",
      text: "Collaborative activities fostering friendship and skill development across schools.",
      image: interschoolClubsImage,
    },
    {
      header: "Community Services",
      text: "Instilling values of service and social responsibility through community engagement.",
      image: communityServicesImage,
    },
  ];

  return (
    <>
      <Navbar />
      <Banner backgroundImage={bannerimage} text="Academics" />
      <EducationalPhilosophy />
      <ClassOfferingsSection classes={classes} />
      <CampusSection campuses={campuses} />
      <ActivitiesSection activities={activities} />
      <Footer />
    </>
  );
}