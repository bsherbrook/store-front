import "../styles/Home.css";
import HomeCarousel from "./HomeCarousel";
import HomeFooter from "./HomeFooter";
import MobileCarousel from "./MobileCarousel";
import MobileFooter from "./MobileFooter";

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
      {props.width > breakpoint ? (
        <HomeFooter />
      ) : (
        <MobileFooter />
      )}
      </div>
    </>
  );
}

export default Home;
