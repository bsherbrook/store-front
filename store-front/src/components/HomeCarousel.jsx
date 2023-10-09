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
              className="box"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 4.0,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
            <Link to="/artist-profile" style={{ textDecoration: "none" }}>
              <div id="homeExhibitBoxA">
                <h1 id="exhibitTitleText">Zalfa Anjelee-Imani</h1>
                <h2 id="exhibitTitleShow">Brave New World</h2>
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
              <h2 id="exhibitTitleShow">Brave New World</h2>
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
              <h1 id="exhibitTitleText2">Zalfa Anjelee-Imani</h1>
              <h2 id="exhibitTitleShow2">Brave New World</h2>
              <h5 id="exhibitTitleDates2">January 21, 2024 - June 15, 2024</h5>
            </div>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="carouselPic" src="src/assets/artistlight.jpg" />
        <Carousel.Caption id="carouselCaptionB">
          <Link to="/artist-profile" style={{ textDecoration: "none" }}>
            <div id="homeExhibitBoxB">
              <h1 id="exhibitTitleText2">Zalfa Anjelee-Imani</h1>
              <h2 id="exhibitTitleShow2">Brave New World</h2>
              <h5 id="exhibitTitleDates2">January 21, 2024 - June 15, 2024</h5>
            </div>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
