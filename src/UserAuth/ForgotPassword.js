import "./UserAuth.css";
import { useState } from "react";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [userInput, setUserInput] = useState("");

  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  function nextStep() {
    dispatch({
      type: "ADD_USERINPUT",
      item: userInput
    });
    navigate("/forgotpasswordnext");
  }

  return (
    <div className="login-container">
      <form className="form">
        <h1>Password assistance</h1>
        <p>
          Enter the email address or mobile phone number associated with your
          Amazon account.
        </p>
        <div className="form-field">
          <p>Email or mobile phone number</p>
          <input type="text" onChange={(e) => setUserInput(e.target.value)} />
        </div>
        <input
          type="button"
          value="Continue"
          onClick={nextStep}
          className="btn"
        />
      </form>
      <div className="login-footer">
        <p style={{ fontSize: "20px" }}>
          Has your email address or mobile phone number changed?
        </p>
        <p>
          If you no longer use the e-mail address associated with your Amazon
          account, you may contact{" "}
          <span className="link">Customer Service</span> for help restoring
          access to your account.
        </p>
      </div>
    </div>
  );
}
