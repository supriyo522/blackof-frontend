import List from './List';
import Constants from '../assets/constants';
import './Footer.css'; // Import the external CSS

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo">
          <a href="/">
            <img
              src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
              alt="logo"
              width="144"
              height="44"
            />
          </a>
        </div>

        {/* Footer Content */}
        <div className="footer-links">
          <List data={Constants} />
        </div>

        {/* Copyright & Address */}
        <div className="footer-bottom">
          <p>&copy;2024. All Rights Reserved.</p>
          <p className="footer-address">Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
