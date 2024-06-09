// ContactUs.js
 
import Navbar from './Navbar';
import Footer from './Footer';
import '../Styles/ContactUs.css';
import Banner from './Banner';
import bannerimage from '../assets/contact.jpg';

function ContactUs() {
  return (
    <>
      <Navbar />
      <Banner backgroundImage={bannerimage} text="Contact Us" />
      <div className="contact-section">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <b>Woji campus</b>
          <p>Address: 123 School Street, City, Country</p>
          <p>Phone: +123 456 7890</p>
          <p>Email: info@schoolname.com</p>
          <br />
          <b>Ireibe campus</b>
          <p>Address: 123 School Street, City, Country</p>
          <p>Phone: +123 456 7890</p>
          <p>Email: info@schoolname.com</p>
        </div>
        
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
