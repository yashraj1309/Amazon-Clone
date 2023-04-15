import "./Subtotal.css";
import { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

export default function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const [cartTotal, setCartTotal] = useState(0);

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/payment");
  };

  useEffect(() => {
    let total = 0;
    basket.forEach((item) => {
      total += item.price;
    });
    setCartTotal(total);
    dispatch({
      type: "ADD_CART_TOTAL",
      item: total
    });
  }, [basket]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong style={{ marginLeft: "5px" }}>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={cartTotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={clickHandler}>Proceed to Checkout</button>
    </div>
  );
}
