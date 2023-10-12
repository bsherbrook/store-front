import "../styles/Store.css";
import ProductCard from "./ProductCard";
import productList from "../productList";
import HomeFooter from "./HomeFooter";
import MobileFooter from "./MobileFooter";

function Store(props) {
  let breakpoint = 575;
  let storeBanner = "src/assets/storepic5.jpg";
  if (props.width < breakpoint) {
    storeBanner = "src/assets/storepicSm.jpg";
  }

  return (
    <>
      <div id="storeBannerBox">
        <img id="storeBannerPic" src={storeBanner} alt="art available at Sip" />
      </div>
      <div id="storeHeading">
        <div id="storeHeadingTitle">
          <h1>The Store</h1>
          <h2 id="storeHeadingSip">at the Sip</h2>
        </div>
        <div id="storeHeadingBlurb">
          <h4 id="headingWelcome">Welcome to the Store</h4>
          <div id="storeHeadingInfo">
            Discover The Sip Shop for one-of-a-kind presents, fashionable
            attire, and captivating art books suitable for individuals of all
            ages. The Shop is accessible during gallery operating hours and
            features an assortment of designer jewelry, accessories, clothing,
            and unique items, in addition to top-notch branded products from
            Boston&apos;s premiere art gallery. Don&apos;t forget to drop by The
            Shop during your next gallery visit, and you can also explore our
            offerings online at www.thegalleryatthesip.com/store.
          </div>
        </div>
        <div id="storeHeadingTest">
            Discover The Sip Shop for one-of-a-kind presents, fashionable
            attire, and captivating art books suitable for individuals of all
            ages. The Shop is accessible during gallery operating hours and
            features an assortment of designer jewelry, accessories, clothing,
            and unique items, in addition to top-notch branded products from
            Boston&apos;s premiere art gallery. Don&apos;t forget to drop by The
            Shop during your next gallery visit, and you can also explore our
            offerings online at www.thegalleryatthesip.com/store.
          </div>
      </div>
      <div id="storeCardBox">
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={props.addToCart}
            cart={props.cart}
            cartChange={props.cartChange}
            ///handle input changes for product cards
          />
        ))}
      </div>
      {props.width > 700 ? <HomeFooter /> : <MobileFooter />}
    </>
  );
}

export default Store;
