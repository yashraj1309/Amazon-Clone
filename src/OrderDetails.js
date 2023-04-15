import { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import OrderDetailsProduct from "./OrderDetailsProduct";
import "./OrderDetails.css";
import { useNavigate } from "react-router-dom";

export default function OrderDetails() {
  // Get current date
  const currentDate = new Date();

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/");
  };

  // Format date
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const [{ userId, userInput, basket }, dispatch] = useStateValue();

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    basket.forEach((item) => {
      total += item.price;
    });
    setCartTotal(total);
  }, [basket]);

  return (
    <div className="orderdetails">
      <h1>Order Details</h1>

      <div className="orderdetails_date">
        <p>Ordered on {formattedDate}</p>
        <span className="orderdetails_line"></span>
        <p>Order# 444-368594-03541</p>
      </div>

      {/* Payment section */}
      <div className="orderdetails_section">
        <div className="orderdetails_section_left">
          <h4>Shipping Address</h4>
          <div className="payment_address">
            <p>
              {userId
                ? userId
                : "Please Enter your email on Sign Up or Login Page"}
            </p>
            <p>
              {userInput ? userInput : "Please Enter your name on Sign Up Page"}
            </p>
            <p>123, Street</p>
            <p>Ahmedabad, Gujarat, India</p>
          </div>
        </div>
        <div className="orderdetails_section_middle">
          <h4>Payment Method</h4>
          <p>CARD / UPI</p>
        </div>
        <div className="orderdetails_section_right">
          <h4>Order Summary</h4>
          <div className="orderdetails_section_Main">
            <div className="orderdetails_section_part">
              <span>Item(s) Subtotal:</span>
              <span>${cartTotal?.toFixed(2)}</span>
            </div>
            <div className="orderdetails_section_part">
              <span>Shipping:</span>
              <span>$0.00</span>
            </div>
            <div className="orderdetails_section_part">
              <span>Total:</span>
              <span>${cartTotal?.toFixed(2)}</span>
            </div>
            <div className="orderdetails_section_part">
              <span>
                <strong>Grand Total:</strong>
              </span>
              <span>
                <strong>${cartTotal?.toFixed(2)}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Details */}
      <div className="productdetails_section">
        <h4>Purchase Details</h4>
        {basket.map((item) => (
          <OrderDetailsProduct
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating}
            ratingCount={item.ratingCount}
          />
        ))}
      </div>
      <div className="home_btn">
        <button onClick={onClickHandler}>Home</button>
      </div>
    </div>
  );
}
