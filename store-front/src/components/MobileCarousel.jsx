import Carousel from "react-bootstrap/Carousel";
import "../styles/MobileCarousel.css";
import { Link } from "react-router-dom";
import GalleryHomePic from "../assets/galleryHome.jpg";
import WesternRainPic from "../assets/westernrain.jpg";
import AbstractPic from "../assets/abstract.jpg";
import ArtistLightPic from "../assets/artistlight.jpg";
import GalleryHomePicSm from "../assets/galleryHomeSm.jpg";
import WesternRainPicSm from "../assets/westernrainSm.jpg";
import AbstractPicSm from "../assets/abstractSm.jpg";
import ArtistLightPicSm from "../assets/artistlightSm.jpg";

function MobileCarousel(props) {

  return (
    <div id="mobileCarouselBox">
      <Carousel>
        <Carousel.Item>
          {props.width > 650 ? (
            <img id="mobileCarouselPic" src={GalleryHomePic} />
          ) : (
            <img id="mobileCarouselPic" src={GalleryHomePicSm} />
          )}
          <Link to="/artist-profile" style={{ textDecoration: "none" }}>
            <div id="mobileCaptionBox">
              <h1 id="exhibitTitleText">Zalfa Anjelee-Imani</h1>
              <h2 id="exhibitTitleShow">Brave New World</h2>
              <h5 id="exhibitTitleDates">January 21, 2024 - June 15, 2024</h5>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
        {props.width > 650 ? (
            <img id="mobileCarouselPic" src={WesternRainPic} />
          ) : (
            <img id="mobileCarouselPic" src={WesternRainPicSm} />
          )}
          <Link to="/artist-profile" style={{ textDecoration: "none" }}>
            <div id="mobileCaptionBox">
              <h1 id="exhibitTitleText">Zalfa Anjelee-Imani</h1>
              <h2 id="exhibitTitleShow">Brave New World</h2>
              <h5 id="exhibitTitleDates">January 21, 2024 - June 15, 2024</h5>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
        {props.width > 650 ? (
            <img id="mobileCarouselPic" src={AbstractPic} />
          ) : (
            <img id="mobileCarouselPic" src={AbstractPicSm} />
          )}
          <Link to="/artist-profile" style={{ textDecoration: "none" }}>
            <div id="mobileCaptionBox">
              <h1 id="exhibitTitleText2">Zalfa Anjelee-Imani</h1>
              <h2 id="exhibitTitleShow2">Brave New World</h2>
              <h5 id="exhibitTitleDates2">January 21, 2024 - June 15, 2024</h5>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
        {props.width > 650 ? (
            <img id="mobileCarouselPic" src={ArtistLightPic} />
          ) : (
            <img id="mobileCarouselPic" src={ArtistLightPicSm} />
          )}
          <Link to="/artist-profile" style={{ textDecoration: "none" }}>
            <div id="mobileCaptionBox">
              <h1 id="exhibitTitleText2">Zalfa Anjelee-Imani</h1>
              <h2 id="exhibitTitleShow2">Brave New World</h2>
              <h5 id="exhibitTitleDates2">January 21, 2024 - June 15, 2024</h5>
            </div>
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MobileCarousel;
