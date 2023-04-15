import { useState, useRef, useEffect } from "react";
import "./UserAuth.css";
import { useStateValue } from "../StateProvider";
import { useNavigate, Link } from "react-router-dom";

export default function LoginNext() {
  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);
  const [{ userId }, dispatch] = useStateValue();
  const [password, setPassword] = useState("");

  function changeVisibilyBox() {
    setClicked(!clicked);
  }

  const myRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      myRef.current &&
      !myRef.current.contains(event.target) &&
      !myElementRef.current.contains(event.target)
    ) {
      setClicked(false);
    }
  };

  function changeVisibily() {
    setClicked(true);
  }

  function signIn() {
    if (password !== "") {
      navigate("/");
    } else {
      alert("please enter valid password (Just enter anything you want ;)");
    }
  }

  useEffect(() => {
    const element = myElementRef.current;
    const rect = element.getBoundingClientRect();
    setPosition({ top: rect.top, left: rect.left });
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const myElementRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const styles = {
    display: clicked ? "block" : "none",
    position: "absolute",
    top: position.top - 100 + "px"
  };
  return (
    <form className="form">
      <h1>Sign in</h1>
      <p>
        {userId ? userId : "Your Name"}
        <Link to="/login" style={{ marginLeft: "1rem" }}>
          Change
        </Link>
      </p>
      <div className="form-field">
        <div className="linema">
          <p>
            <b>Password</b>
          </p>
          <a href="https://amazon.com">Forgot Password</a>
        </div>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="button" value="Sign in" className="btn" onClick={signIn} />
      <div className="form-field login-next-formfield">
        <div className="login_next_checkbox_div">
          <input type="checkbox" />
          &nbsp; Keep me signed in. &nbsp;
        </div>
        <span
          onClick={changeVisibily}
          ref={myElementRef}
          className="login-next-formfield"
        >
          Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="28"
            viewBox="0 96 960 960"
            width="28"
            onClick={changeVisibily}
          >
            <path d="M480 696 280 497h400L480 696Z" />
          </svg>
        </span>
      </div>
      <div style={styles} ref={myRef} className="login-next-details">
        <header>
          <div>
            <b>"Keep Me Signed In" Checkbox</b>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 96 960 960"
            width="18"
            onClick={changeVisibilyBox}
          >
            <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
          </svg>
        </header>
        <p>
          Choosing "Keep me signed in" reduces the number of times you're asked
          to Sign-In on this device.
        </p>
        <p>
          To keep your account secure, use this option only on your personal
          devices.
        </p>
      </div>
    </form>
  );
}
