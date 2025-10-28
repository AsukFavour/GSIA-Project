import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Admission", path: "/admission" },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", url: "#", color: "hover:bg-blue-600" },
    { icon: "fab fa-twitter", url: "#", color: "hover:bg-sky-500" },
    { icon: "fab fa-instagram", url: "#", color: "hover:bg-pink-600" },
    { icon: "fab fa-linkedin-in", url: "#", color: "hover:bg-blue-700" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About Section */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start">
              <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
                <img src={logo} alt="GSIA Logo" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-200">
                The Good Seed International Academy
              </h3>
              <p className="text-purple-200 text-sm leading-relaxed">
                Raising tomorrow&apos;s leaders with excellence, integrity, and faith since 2009.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-indigo-400 rounded"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-purple-200 hover:text-white transition-all duration-300 no-underline"
                  >
                    <i className="fas fa-chevron-right text-xs text-purple-400 group-hover:translate-x-1 transition-transform"></i>
                    <span className="text-sm">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-indigo-400 rounded"></div>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-purple-200 hover:text-white transition-colors">
                <i className="fas fa-map-marker-alt text-purple-400 mt-1"></i>
                <span>
                  RD 10 FLAT 1A, Federal Housing Estate,<br />
                  Port Harcourt, Rivers State
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-purple-200 hover:text-white transition-colors">
                <i className="fas fa-phone text-purple-400"></i>
                <a href="tel:+2341234567890" className="no-underline text-purple-200 hover:text-white">
                  +234 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-purple-200 hover:text-white transition-colors">
                <i className="fas fa-envelope text-purple-400"></i>
                <a href="mailto:info@gsia.edu.ng" className="no-underline text-purple-200 hover:text-white">
                  info@gsia.edu.ng
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-purple-200 hover:text-white transition-colors">
                <i className="fas fa-clock text-purple-400"></i>
                <span>Mon - Fri: 8:00AM - 3:00PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-indigo-400 rounded"></div>
              Stay Connected
            </h4>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm text-purple-200 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-purple-400/30 rounded-lg text-white placeholder-purple-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm text-purple-200 mb-3">Follow us on social media</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  >
                    <i className={`${social.icon} text-sm`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-purple-200 text-center md:text-left">
            <p>
              &copy; {currentYear} The Good Seed International Academy. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-purple-200 hover:text-white transition-colors no-underline">
              Privacy Policy
            </a>
            <span className="text-purple-400">|</span>
            <a href="#" className="text-purple-200 hover:text-white transition-colors no-underline">
              Terms of Service
            </a>
            <span className="text-purple-400">|</span>
            <a href="#" className="text-purple-200 hover:text-white transition-colors no-underline">
              Sitemap
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="absolute bottom-8 right-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up text-white group-hover:translate-y-[-2px] transition-transform"></i>
          </button>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600"></div>
    </footer>
  );
};

export default Footer;
