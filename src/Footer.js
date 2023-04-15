import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <h1>&#169; Amazon Clone</h1>
      <Link to="https://github.com/yashraj1309">
        Developed by Yashraj Dudhatra
      </Link>
    </footer>
  );
}
