import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShpppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

export default function Header() {
  const [{ basket, userId, userInput, cartTotal }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          alt="amazon-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">
            {userId !== "" ? "Hello" : "Hello Guest"}
          </span>
          {userId !== "" ? (
            userId
          ) : (
            <span className="header_optionLineTwo">
              <Link to="/login" style={{ color: "white" }}>
                Sign In
              </Link>
            </span>
          )}
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout" style={{textDecoration: "none"}}>
          <div className="header_optionBasket">
            <ShpppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
