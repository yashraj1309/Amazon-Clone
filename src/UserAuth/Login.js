import { useState } from "react";
import "./UserAuth.css";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  // dispatch the item
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);
  const [userId, setUserId] = useState("");
  function changeVisibily() {
    setClicked(!clicked);
  }

  function addUserId() {
    if (userId === "") {
      alert("Please Enter Email or Phone");
    } else {
      dispatch({
        type: "ADD_USERID",
        item: userId
      });
      navigate("/loginnext");
    }
  }

  const styles = {
    display: clicked ? "inline" : "none",
    cursor: "pointer"
  };

  const styles1 = {
    display: clicked ? "none" : "inline"
  };

  const styles2 = {
    display: clicked ? "block" : "none"
  };

  return (
    <div className="login-container">
      <form className="form">
        <h1>Sign in</h1>
        <div className="form-field">
          <p>Email or mobile phone number</p>
          <input
            type="text"
            className="loginInput"
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <input
          type="button"
          value="Continue"
          className="btn"
          onClick={addUserId}
        />
        <p>
          By creating an account or logging in, you agree to Amazon Clone’s{" "}
          <strong>Conditions of Use</strong> and <strong>Privacy Policy</strong>
          .
        </p>
        <div className="need-help initial">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
            style={styles1}
            onClick={changeVisibily}
          >
            <path d="M400 776V376l200 200-200 200Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
            onClick={changeVisibily}
            style={styles}
          >
            <path d="M480 696 280 497h400L480 696Z" />
          </svg>
          <div className="login-need-help-content">
            <div
              className="link"
              onClick={changeVisibily}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Need help?
            </div>
            <div className="link show-login-help-content" style={styles2}>
              <Link to="/forgotpassword">Forgot Password</Link>
            </div>
            <div className="link show-login-help-content" style={styles2}>
              <Link to="/signup"> Other issues with Sign-In</Link>
            </div>
          </div>
        </div>
      </form>
      <div className="login-footer">
        <div>
          <span></span>
          <span>New to Amazon?</span>
          <span></span>
        </div>
        <Link to="/signup">
          <input
            type="button"
            value="Create your Amazon account
"
            className="create-btn"
          />
        </Link>
      </div>
    </div>
  );
}
