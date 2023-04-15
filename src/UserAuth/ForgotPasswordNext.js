import "./UserAuth.css";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

export default function Login() {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const [{ userInput }, dispatch] = useStateValue();
  function changeVisibily() {
    setClicked(!clicked);
  }

  const clickHandler = () => {
    navigate("/");
  };

  const styles = {
    display: clicked ? "inline" : "none"
  };

  const styles1 = {
    display: clicked ? "none" : "inline"
  };

  return (
    <form className="form">
      <h1>Verification required</h1>
      <p>
        To continue, complete this verification step. We've sent an OTP to the
        <strong style={{ marginLeft: "2.5px" }}>{userInput}</strong>.Please
        enter it below to complete verification.
      </p>
      <div className="form-field">
        <p>
          <b>Enter OTP</b>
        </p>
        <input type="text" value="123456" />
      </div>
      <input
        type="button"
        value="Continue"
        className="btn"
        onClick={clickHandler}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        Resend OTP
      </div>
      <div className="form-field">
        <span
          onClick={changeVisibily}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            marginLeft: "-8px",
            marginTop: "1rem",
            cursor: "pointer"
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 96 960 960"
            width="30"
            style={styles1}
            onClick={changeVisibily}
          >
            <path d="M400 776V376l200 200-200 200Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 96 960 960"
            width="30"
            onClick={changeVisibily}
            style={styles}
          >
            <path d="M480 696 280 497h400L480 696Z" />
          </svg>
          I need more help
        </span>
        <div style={styles}>
          <p>
            If you've already tried to reset your password, but haven't received
            an email from Amazon, check your Junk or Spam folder.
          </p>
          <p>
            If you can't access your email, try resetting that first through
            your email provider.
          </p>
          <p>
            If you've recently updated your password, your old password could
            still be saved in your browser. Try clearing your browser history
            and re-typing your password.
          </p>
          <p>
            If that does not work, please try calling us at 180030001593 so that
            we can help you out.
          </p>
        </div>
      </div>
    </form>
  );
}
