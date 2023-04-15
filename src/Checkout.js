import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

export default function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img23/Fashion/Flip/BAU/topscrollls/pc/2-eng._SX3000_QL85_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>

          {basket.length > 0 ? (
            basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
                ratingCount={item.ratingCount}
              />
            ))
          ) : (
            <div className="checkout_Empty">
              <img
                src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
                alt=""
              />
              <div className="checkout_EmptyInfo">
                <h3>Your Amazon Cart is empty</h3>
                <Link to="/">Shop today’s deals</Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}
