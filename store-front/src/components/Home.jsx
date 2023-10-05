import "../styles/Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import homepageLg from "../assets/gallery.jpg";
import homepageMed from "../assets/gallery-med.jpg";
import homepageSm from "../assets/gallery-sm.jpg";
import HomeCarousel from "./HomeCarousel";
import HomeFooter from "./HomeFooter";

function Home(props) {
  let breakpoint = 900;
  let mobileBreak = 500;
  let homepageBg;
  if (props.width > breakpoint) {
    homepageBg = homepageLg;
  }
  if (props.width <= breakpoint) {
    homepageBg = homepageMed;
  }
  if (props.width <= mobileBreak) {
    homepageBg = homepageSm;
  }

  return (
    <>
        <div id="homePage">
          <HomeCarousel />
        </div>
      

      <div id="footer">
        <HomeFooter />
      </div>
      
    </>
  );
}

export default Home;
