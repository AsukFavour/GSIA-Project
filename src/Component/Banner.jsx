// Banner.js
 
import PropTypes from 'prop-types';
import '../Styles/Banner.css';

const Banner = ({ backgroundImage, text }) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="banner" style={bannerStyle}>
        <div className="overlay"></div>
      <div className="banner-content">
        <h1 className='bnrtxt'>{text}</h1>
      </div>
    </div>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Banner;
