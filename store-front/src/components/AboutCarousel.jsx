import Carousel from "react-bootstrap/Carousel";
import "../styles/AboutCarousel.css";

function AboutCarousel() {
  return (
    <Carousel id="testing">
      <Carousel.Item>
        <img id="test" src="src/assets/galleryAbout.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img id="test" src="src/assets/aboutgallery.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img id="test" src="src/assets/aboutgallery3.jpg" />
      </Carousel.Item>
    </Carousel>
  );
}

export default AboutCarousel;
