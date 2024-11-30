import logo from "../assets/logo/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1F2544] text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between gap-8 px-6">
        {/* Logo Section */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Footer Logo" className="w-24 h-auto mb-4" />
            <h2 className="text-base font-bold uppercase">
              The Good Seed Intl Academy
            </h2>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="no-underline text-white hover:text-gray-300 transition focus:outline-none"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="no-underline text-white hover:text-gray-300 transition focus:outline-none"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="no-underline text-white hover:text-gray-300 transition focus:outline-none"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/admission"
                  className="no-underline text-white hover:text-gray-300 transition focus:outline-none"
                >
                  Admission
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-3">Contact Us</h4>
            <p className="text-sm leading-relaxed">
              123 School Street
              <br />
              Cityville, State 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@example.com
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-base font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition focus:outline-none"
              >
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition focus:outline-none"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition focus:outline-none"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="w-full md:w-auto text-center md:text-left">
          <h4 className="text-base font-semibold mb-3">More Info</h4>
          <a
            href="#"
            className="no-underline text-white hover:text-gray-300 transition focus:outline-none text-sm"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
        <p>&copy; 2024 Your School. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
