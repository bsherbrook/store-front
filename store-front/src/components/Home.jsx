import "../styles/Home.css";
import HomeCarousel from "./HomeCarousel";
import HomeFooter from "./HomeFooter";
import MobileCarousel from "./MobileCarousel";

function Home(props) {
  let breakpoint = 700;

  return (
    <>
      <div id="homePage">
        {props.width > breakpoint ? (
          <HomeCarousel />
        ) : (
          <MobileCarousel width={props.width} />
        )}
      </div>

      <div id="footer">
        <HomeFooter />
      </div>
    </>
  );
}

export default Home;
