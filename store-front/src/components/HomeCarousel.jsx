import Carousel from "react-bootstrap/Carousel";
import "../styles/HomeCarousel.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img id="carouselPic" src="src/assets/galleryHome.jpg" />
        <Carousel.Caption id="carouselCaptionA">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            exit={{ opacity: 0 }}
          >
            <Link to="/artist-profile" style={{ textDecoration: "none" }}>
              <div id="homeExhibitBoxA">
                <h1 id="exhibitTitleText">Zalfa Anjelee-Imani</h1>
                <h2 id="exhibitTitleText2">Brave New World</h2>
                <h5 id="exhibitTitleDates">January 21, 2024 - June 15, 2024</h5>
              </div>
            </Link>
          </motion.div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="carouselPic" src="src/assets/westernrain.jpg" />
        <Carousel.Caption id="carouselCaptionA">
          <Link to="/artist-profile" style={{ textDecoration: "none" }}>
            <div id="homeExhibitBoxA">
              <h1 id="exhibitTitleText">Zalfa Anjelee-Imani</h1>
              <h2 id="exhibitTitleText2">Brave New World</h2>
              <h5 id="exhibitTitleDates">January 21, 2024 - June 15, 2024</h5>
            </div>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="carouselPic" src="src/assets/abstract.jpg" />
        <Carousel.Caption id="carouselCaptionB">
          <Link to="/artist-profile" style={{ textDecoration: "none" }}>
            <div id="homeExhibitBoxB">
              <h1 id="exhibitTitleText">Zalfa Anjelee-Imani</h1>
              <h2 id="exhibitTitleText2">Brave New World</h2>
              <h5 id="exhibitTitleDates">January 21, 2024 - June 15, 2024</h5>
            </div>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="carouselPic" src="src/assets/artistlight.jpg" />
        <Carousel.Caption id="carouselCaptionB">
          <Link to="/artist-profile" style={{ textDecoration: "none" }}>
            <div id="homeExhibitBoxB">
              <h1 id="exhibitTitleText">Zalfa Anjelee-Imani</h1>
              <h2 id="exhibitTitleText2">Brave New World</h2>
              <h5 id="exhibitTitleDates">January 21, 2024 - June 15, 2024</h5>
            </div>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;