import "./CheckoutProduct.css";
import "./OrderDetailsProduct.css";

export default function CheckoutProduct(props) {
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct_image"
        src={props.image}
        alt=""
        style={
          ({ width: "100px" }, { height: "100px" }, { objectFit: "contain" })
        }
      />
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
      </div>
    </div>
  );
}
