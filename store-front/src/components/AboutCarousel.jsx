import Carousel from "react-bootstrap/Carousel";
import "../styles/AboutCarousel.css";
import galleryAboutPic from "../assets/galleryAbout.jpg"
import galleryAboutPic2 from "../assets/aboutgallery.jpg"
import galleryAboutPic3 from "../assets/aboutgallery3.jpg"

function AboutCarousel() {
  return (
    <Carousel id="aboutCarousel">
      <Carousel.Item>
        <img id="aboutCarouselPic" src={galleryAboutPic} alt="an art show at gallery at Sip"/>
      </Carousel.Item>
      <Carousel.Item>
        <img id="aboutCarouselPic" src={galleryAboutPic2} alt="the entry way to gallery at Sip" />
      </Carousel.Item>
      <Carousel.Item>
        <img id="aboutCarouselPic" src={galleryAboutPic3} alt="the main gallery room at gallery at Sip" />
      </Carousel.Item>
    </Carousel>
  );
}

export default AboutCarousel;
