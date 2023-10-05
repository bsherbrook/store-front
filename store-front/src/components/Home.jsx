import "../styles/Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import homepageLg from "../assets/gallery.jpg"
import homepageMed from "../assets/gallery-med.jpg"
import homepageSm from "../assets/gallery-sm.jpg"
import HomeCarousel from "./HomeCarousel";

function Home(props) {
  let breakpoint=900;
  let mobileBreak= 500;
  let homepageBg;
  if (props.width>breakpoint){homepageBg=homepageLg}
  if (props.width<=breakpoint){homepageBg=homepageMed}
  if (props.width<=mobileBreak){homepageBg=homepageSm}

    return (
      <>

        <div id="homePage">
          <HomeCarousel />
        </div>
        {/* <img  id="homepageBg" 
              src={homepageBg} 
              alt="" />
        <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              exit={{ opacity: 0 }}
            >
          <Link to='/artist-profile' style={{textDecoration:'none'}}>
            <div id="homeExhibitBox">
              <h1 id="exhibitTitleText">Zalfa Anjelee-Imani</h1>
              <h2 id="exhibitTitleText2">Brave New World</h2>
              <h5 id="exhibitTitleDates">January 21, 2024 - June 15, 2024</h5>
            </div>
          </Link>
        </motion.div> */}
      </>
    );
  }
  
  export default Home;
  