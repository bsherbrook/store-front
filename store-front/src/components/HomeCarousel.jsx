import Carousel from "react-bootstrap/Carousel";
import "../styles/HomeCarousel.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CarouselPic1 from '../assets/galleryHome.jpg'
import CarouselPic2 from "../assets/westernrain.jpg"
import CarouselPic3 from "../assets/abstract.jpg"
import CarouselPic4 from "../assets/artistlight.jpg"

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img id="carouselPic" src={CarouselPic1} alt="an art gallery full of paintings" />
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
                <p className="presents">presents</p>
                <h2 id="exhibitTitleShow">Brave New World</h2>
                {/* <h5 id="exhibitTitleDates">January 21, 2024 - June 15, 2024</h5> */}
              </div>
            </Link>
          </motion.div>
        </Carousel.Caption>
        <Carousel.Caption>
          {" "}
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
              <div className="dateBox">
                <h5 id="exhibitTitleDates">January 21, 2024 - June 15, 2024</h5>
                <p className="showBlurb">
                  &quot;An Unforgettable experience unlike any other&quot;
                </p>
              </div>
            </Link>
          </motion.div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="carouselPic" src={CarouselPic2} alt="a painting of wagons caught in a desert rain" />
        <Carousel.Caption id="carouselCaptionA">
          <Link to="/artist-profile" style={{ textDecoration: "none" }}>
            <div id="homeExhibitBoxA">
              <h1 id="exhibitTitleText">Zalfa Anjelee-Imani</h1>
              <p className="presents">presents</p>
              <h2 id="exhibitTitleShow">Brave New World</h2>
              <h5 id="exhibitTitleDates">January 21, 2024 - June 15, 2024</h5>
            </div>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="carouselPic" src={CarouselPic3} alt="an abstract painting of green and blue swirls"/>
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
        <img id="carouselPic" src={CarouselPic4} alt="a picture of the artist standing in atmospheric red lighting" />
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
