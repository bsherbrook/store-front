import "../styles/Store.css";
import ProductCard from "./ProductCard";
import productList from "../productList";

function Store(props) {
    return (
      <>
        {productList.map((product)=>(
          <ProductCard
            key={product.id}
            product={product}
            addToCart={props.addToCart}
          />
        ))}
      </>
    );
  }
  
  export default Store;
  