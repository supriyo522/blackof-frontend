import { useState, useEffect } from "react";
import { LinkedIn, Translate } from "@mui/icons-material";
import Button from "./Button";
import "./Navbar.css"; // Import the CSS

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <div className="navbar-container">
        <a className="logo-link" href="#maindiv">
          <img
            src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
            alt="logo"
            width="144"
            height="44"
          />
        </a>

        <div className="navbar-right">
          <Button className="contact-btn" text="Contact Us" />
          <a
            href="https://www.linkedin.com/company/supreme-group-company/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn style={{ width: 24, height: 24 }} />
          </a>
          <div className="translate-wrapper">
            <Translate style={{ width: 24, height: 24 }} />
            <span className="lang-text">ENG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
