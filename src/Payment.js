import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [{ basket, userId, userInput }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const onClickHandler = () => {
    if (basket.length < 1) {
      alert("please add some product to your cart");
    } else {
      alert(
        "Your order is successfully Placed you will redirect to OrderDetails. Thank you for Shopping with us"
      );
      navigate("/orderdetails");
    }
  };
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Delivery Section */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>
              {userId ? (
                userId
              ) : (
                <div>
                  Please Enter your email on <Link to="/login">Login Page</Link>
                </div>
              )}
            </p>
            <p>
              {userInput ? (
                userInput
              ) : (
                <div>
                  Please Enter your Name on{" "}
                  <Link to="/signup">Sign Up Page</Link>
                </div>
              )}
            </p>
            <p>123, Street</p>
            <p>Ahmedabad, Gujarat, India</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and Delivery Address</h3>
          </div>

          <div className="payment_items">
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

        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <p>
              Thank you for your order. As this is a simulated e-commerce store,
              you do not need to make any actual payment. However, in order to
              proceed with the order confirmation process, please click the "
              <strong>Pay</strong>" button below.
            </p>
            <button onClick={onClickHandler}>Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
}
