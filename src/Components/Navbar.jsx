import {useState,useEffect} from "react"; //to manage states of components
import { LinkedIn, Translate } from "@mui/icons-material"; //Icons from MaterialUI icons
import Button from "./Button"; //Our Button component
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true); //to check whether  navbar should be visible or not
  const [lastScrollY, setLastScrollY] = useState(0); //to check the last scroll position

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false); // To Hide Navbar
    } else {
      setIsVisible(true); // To Show Navbar
    }
    setLastScrollY(window.scrollY); //sets the latest scrollY
  };

  //To handle the scroll when scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div
      className={`w-full p-2 fixed top-0 left-0 z-50 transition-transform duration-300 
    ${isVisible ? "translate-y-0" : "-translate-y-full"} bg-white shadow-md`}
    >
      {/* COMPANY logo with anchor tag */}
      <div className="flex my-2 mx-6 md:mx-24 p-2 justify-between items-center">
        <a className="hover:cursor-pointer" href="#maindiv">
          <img
            src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
            alt="logo"
            width="144"
            height="44    "
          />
        </a>

        <div className="hidden lg:flex lg:gap-4 lg:items-center">
          {/* Button and Linkedin button */}
          <Button className="bg-primary border-none" text="Contact Us" />
          <a
            href="https://www.linkedin.com/company/supreme-group-company/"
            target="_blank"
          >
            <LinkedIn sx={{ width: 24, height: 24 }} />
          </a>
          {/* Translate logo */}
          <div className="flex justify-center items-center">
            <Translate sx={{ width: 24, height: 24 }} />
            <span className="text-xs font-bold">ENG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
