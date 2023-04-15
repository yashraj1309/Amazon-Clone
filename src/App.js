import "./styles.css";
import Header from "./Header.js";
import Home from "./Home";
import Login from "./UserAuth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import LoginNext from "./UserAuth/LoginNext";
import Signup from "./UserAuth/SignUp";
import ForgotPassword from "./UserAuth/ForgotPassword";
import ForgotPasswordNext from "./UserAuth/ForgotPasswordNext";
import Payment from "./Payment";
import Footer from "./Footer";
import OrderDetails from "./OrderDetails";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginnext" element={<LoginNext />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/forgotpasswordnext" element={<ForgotPasswordNext />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
