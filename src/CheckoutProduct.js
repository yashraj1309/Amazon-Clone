import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

export default function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={props.image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{props.title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product_rating">
          {Array.from({ length: Math.round(props.rating) }, (_, index) => (
            <span key={index} role="img" aria-label="star">
              &#11088;
            </span>
          ))}
          <span className="product_rating_count" title="rating by users">
            ({props.ratingCount})
          </span>
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}
