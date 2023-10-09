import Button from "react-bootstrap/esm/Button";

const Quantity = ({ increase, decrease, quantity, cartChange, handleStoreChange}) => {
  const inputChange = (e) => {
    let storeCheck=e.target.parentNode.parentNode.id;
    if(storeCheck==='productDisplay'){
        handleStoreChange(e);
    }
    else  cartChange(e.target.value);    
  };

  return (
    <div id="quantityBox">
      <Button
        id="minusButton"
        variant="light"
        onClick={decrease}
        aria-label="decrease quantity"
        className="btn-sm"
      >
        -
      </Button>{" "}
      <input
        name="quantityInput"
        id="quantityInput"
        value={quantity}
        type="number"
        min="1"
        onChange={inputChange}
        autoComplete="off"
        placeholder="1"
      />
      <Button
        id="addButton"
        variant="light"
        onClick={increase}
        aria-label="increase quantity"
        className="btn-sm"
      >
        +
      </Button>{" "}
    </div>
  );
};

export default Quantity;
