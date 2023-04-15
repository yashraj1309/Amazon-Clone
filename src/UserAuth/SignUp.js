import { useState, useEffect } from "react";
import data from "./mobileCodes.json";
import "./UserAuth.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [mobileCode, setMobileCode] = useState(data);
  const [selectedValue, setSelectedValue] = useState("+91");
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [{ basket }, dispatch] = useStateValue();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const user = {
    name: userName,
    email: email,
    password: password,
    mobileNumber: mobileNumber
  };

  const navigate = useNavigate();

  const validate = () => {
    if (user.name.length < 5) {
      alert("Name must be at least 5 characters long.");
      document.querySelector("#name").focus();
      return false;
    }

    if (user.mobileNumber.length !== 10) {
      alert("Mobile number must be exactly 10 digits long.");
      document.querySelector("#mobileNumber").focus();
      return false;
    }

    if (user.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      document.querySelector("#password").focus();
      return false;
    }

    // If all validations pass, return true to indicate success
    // return true;
    dispatch({
      type: "ADD_USERINPUT",
      item: userName
    });
    navigate("/");
  };

  return (
    <form className="form">
      <h1>Create Account</h1>
      <div className="form-field">
        <p className="form-field-p">Your name</p>
        <input
          type="text"
          placeholder="First and last name"
          onChange={(e) => setUserName(e.target.value)}
          id="name"
        />
      </div>
      <div className="form-field">
        <p className="form-field-p">Mobile number</p>
        <div className="mobile">
          <select
            value={selectedValue}
            onChange={handleSelectChange}
            className="signup-mobile-code"
          >
            {mobileCode.map((item) => (
              <option value={item.dial_code}>
                <p>
                  {item.name} {item.dial_code}
                </p>
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Mobile number"
            style={{ marginRight: 0 }}
            onChange={(e) => setMobileNumber(e.target.value)}
            id="mobileNumber"
          />
        </div>
        <div className="form-field">
          <p className="form-field-p">Email (Optional)</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-field">
          <p className="form-field-p">Password</p>
          <input
            type="password"
            placeholder="At least 6 characters"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
        </div>
        <p>
          By enrolling your mobile phone number, you consent to receive
          automated security notifications via text message from Amazon. Message
          and data rates may apply.
        </p>
        <input
          type="button"
          value="Sign Up"
          className="btn"
          onClick={validate}
        />
        <p>
          Already have an account? <Link to="/login">Sign In</Link>{" "}
        </p>

        <p>
          By creating an account or logging in, you agree to Amazon Clone’s{" "}
          <strong>Conditions of Use</strong> and <strong>Privacy Policy</strong>
          .
        </p>
      </div>
    </form>
  );
}
