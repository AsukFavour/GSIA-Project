// ContactUs.js
import Navbar from '../Component/Navbar';
import Footer from './Footer';
import Banner from './Banner';
import ContactInfoSection from './Contact/ContactInfoSection';
import ContactFormSection from './Contact/ContactFormSection';
import bannerimage from '../assets/contact.jpg';

function ContactUs() {
  // Campus contact data
  const campuses = [
    {
      name: "Woji Campus",
      address: "RD 10 FLAT 1A, Federal Housing Estate, Port Harcourt, Rivers State",
      phone: "+234 123 456 7890",
      email: "woji@gsia.edu.ng"
    },
    {
      name: "Ireibe Campus",
      address: "Good Seed Avenue, Ireibe, Rivers State",
      phone: "+234 098 765 4321",
      email: "ireibe@gsia.edu.ng"
    }
  ];

  return (
    <>
      <Navbar />
      <Banner backgroundImage={bannerimage} text="Contact Us" />
      <ContactInfoSection campuses={campuses} />
      <ContactFormSection />
      <Footer />
    </>
  );
}

export default ContactUs;