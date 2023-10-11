import "../styles/About.css";
import { motion } from "framer-motion";
import aboutBg from "../assets/aboutBg.jpg";
import artPic from "../assets/artcrop4.jpg";
import AboutCarousel from "./AboutCarousel";
import HomeFooter from "./HomeFooter";
import MobileFooter from "./MobileFooter";

function About(props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.0 }}
        exit={{ opacity: 0 }}
      >
        <div id="carouselFlex">
          <div id="carouselBox">
            <AboutCarousel />
          </div>
        </div>
        <div id="aboutUs" style={{ backgroundImage: `url(${aboutBg})` }}>
          <div id="aboutTitleBox">
            <h2 id="whoWeAre">Who We Are</h2>
            <img id="aboutPainting" src={artPic} alt="a pointilist painting of a woman with flowers" />
            <div id="aboutContactBox">
              <h5 id="aboutContactHead">Contact Us</h5>
              <p className="aboutInfo">info@GalleySip.com</p>
              <p className="aboutInfo">555-555-5555</p>
              <p className="aboutInfo">1234 E Hoover St.</p>
              <p className="aboutInfo">Somerville Ma. 02145</p>
            </div>
          </div>
          <div id="aboutBox">
            <h5 id="aboutHeading">Mission Statement</h5>
            <p>
              Our mission is to provide a dynamic platform for emerging and
              established artists, offering a diverse range of artistic
              expressions to enrich the cultural tapestry of our community.
              Through thought-provoking exhibitions and immersive experiences,
              we strive to create a welcoming space that ignites creativity,
              sparks meaningful conversations, and connects individuals with the
              beauty of visual art.
            </p>
            <h5 id="aboutHeading">About SIP</h5>
            <p>
              Gallery at Sip is more than just an art gallery; it is a vibrant
              hub for artistic exploration and connection. Nestled in the heart
              of Boston, our gallery is a space where art aficionados,
              collectors, and curious minds come together to celebrate the world
              of contemporary art.
            </p>
            <p>
              Founded in 2017, Gallery at Sip has quickly become a beacon of
              creativity in our community. Our mission is to curate a diverse
              collection of artworks that challenge conventions, inspire
              imagination, and evoke emotion. We believe that art is a universal
              language that transcends boundaries, and we are committed to
              showcasing a wide spectrum of artistic styles and perspectives.
            </p>
          </div>
          <div id="aboutGalleryBox">
            <img
              id="aboutPainting2"
              src="src/assets/storepic2.jpg"
              alt="an art show at gallery at sip"
            />
          </div>
          <div id="aboutBox">
            <h5 id="aboutHeading">History</h5>
            <p>
              In the heart of a bustling urban enclave, nestled amidst the
              vibrant streets of Somerville, Gallery at Sip was born in the
              autumn of 2017. Founded by visionary art curator, Isabella
              Thornton, and her partner, renowned architect Ethan Sinclair,
              Gallery at Sip emerged as a beacon of creativity in the
              ever-evolving art world.
            </p>
            <p>
              Sip soon established itself as a sanctuary for emerging artists
              seeking a platform to showcase their talents. Isabella's keen
              curation introduced the world to a diverse range of artistic
              expressions, from striking abstract paintings to intricate
              sculptures and immersive multimedia installations. The gallery's
              mantra became clear: art should be savored slowly, just like a
              perfectly brewed cup of coffee.
            </p>
            <p id="aboutBottomText">
              In 2023, Sip Gallery stands as a testament to the power of a dream
              nurtured with passion and dedication. With a rich history of
              nurturing talent, fostering creativity, and celebrating the fusion
              of art and ambiance, Sip Gallery continues to be a cherished
              cultural gem in Eastonville, captivating art lovers, connoisseurs,
              and seekers of inspiration. As the years roll on, Sip Gallery
              remains committed to the spirit of its founders, offering a place
              where art is not just observed but embraced, savored, and
              celebrated—a true oasis where creativity flows as freely as the
              coffee, tea, and conversation.
            </p>
          </div>
          {props.width > 700 ? <HomeFooter /> : <MobileFooter />}
        </div>
      </motion.div>
    </>
  );
}

export default About;
