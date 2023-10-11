import Carousel from "react-bootstrap/Carousel";
import "../styles/AboutCarousel.css";

function AboutCarousel() {
  return (
    <Carousel id="aboutCarousel">
      <Carousel.Item>
        <img id="aboutCarouselPic" src="src/assets/galleryAbout.jpg" alt="an art show at gallery at Sip"/>
      </Carousel.Item>
      <Carousel.Item>
        <img id="aboutCarouselPic" src="src/assets/aboutgallery.jpg" alt="the entry way to gallery at Sip" />
      </Carousel.Item>
      <Carousel.Item>
        <img id="aboutCarouselPic" src="src/assets/aboutgallery3.jpg" alt="the main gallery room at gallery at Sip" />
      </Carousel.Item>
    </Carousel>
  );
}

export default AboutCarousel;
