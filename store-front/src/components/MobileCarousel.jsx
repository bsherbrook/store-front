import Carousel from "react-bootstrap/Carousel";
import "../styles/MobileCarousel.css";
import { Link } from "react-router-dom";

function MobileCarousel(props) {
  
  let galleryImg = "src/assets/galleryHome.jpg";
  let westernPic= "src/assets/westernrain.jpg";
  let abstract= "src/assets/abstract.jpg";
  let artistLight= "src/assets/artistlight.jpg";

  if (props.width<650){
    galleryImg="src/assets/galleryHomeSm.jpg"
    westernPic="src/assets/westernrainSm.jpg";
    abstract="src/assets/abstractSm.jpg";
    artistLight="src/assets/artistlightSm.jpg";
  }

  return (
    <div id="mobileCarouselBox">
      <Carousel>
        <Carousel.Item>
          <img id="mobileCarouselPic" src={galleryImg} />
          <Link to="/artist-profile" style={{ textDecoration: "none" }}>
            <div id="mobileCaptionBox">
              <h1 id="exhibitTitleText">Zalfa Anjelee-Imani</h1>
              <h2 id="exhibitTitleShow">Brave New World</h2>
              <h5 id="exhibitTitleDates">January 21, 2024 - June 15, 2024</h5>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <img id="mobileCarouselPic" src={westernPic} />
          <Link to="/artist-profile" style={{ textDecoration: "none" }}>
            <div id="mobileCaptionBox">
              <h1 id="exhibitTitleText">Zalfa Anjelee-Imani</h1>
              <h2 id="exhibitTitleShow">Brave New World</h2>
              <h5 id="exhibitTitleDates">January 21, 2024 - June 15, 2024</h5>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <img id="mobileCarouselPic" src={abstract} />
          <Link to="/artist-profile" style={{ textDecoration: "none" }}>
            <div id="mobileCaptionBox">
              <h1 id="exhibitTitleText2">Zalfa Anjelee-Imani</h1>
              <h2 id="exhibitTitleShow2">Brave New World</h2>
              <h5 id="exhibitTitleDates2">January 21, 2024 - June 15, 2024</h5>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <img id="mobileCarouselPic" src={artistLight} />
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
