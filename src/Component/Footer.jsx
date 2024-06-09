// Footer.js
 
import '../Styles/Footer.css';
import logo from '../assets/logo/gsia-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-container">
          <img src={logo} alt="Footer Logo" />
          <h2>THE GOOD SEED INTL ACADEMY</h2>
        </div>
        <div className="links-container">
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/admission">Admission</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>123 School Street<br />Cityville, State 12345<br />Phone: (123) 456-7890<br />Email: info@example.com</p>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="footer-info">
            <h4>More Info</h4>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Your School. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
