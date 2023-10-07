import "../styles/CartCard.css";

const CartCard = ({item, cart}) => {
  
  const valueChange=(e)=>{
    console.log(e.target.value)
  }

  return (
    <>
      <div id="cartItem">
        <img
          src={`../src/assets/${item.image}`}
          alt={item.name}
          id="cartItemPic"
        />
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <p>Quantity:</p>
        <input  //make this a drop down menu like on amazon?
          name="quantityInput"
          id="quantityInput"
          value={item.quantity}
          type="number"
          min="1"
          onChange={valueChange}
          autoComplete="off"
        />
        <button>Delete from Cart</button>
      </div>
    </>
  );
};
export default CartCard;
