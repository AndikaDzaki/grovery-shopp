import { Link } from "react-router-dom";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Footer = () => {
  const [menu, setMenu] = useState("menu");
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Experience the true essence of farm-to-table freshness with our garden-grown produce. Each bite delivers a burst of flavor and an abundance of essential vitamins and minerals.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <a href="#about" onClick={() => setMenu("About")} className={menu === "About" ? "active" : ""}>
                About
              </a>
            </li>
            <li>
              <Link to="/product" onClick={() => setMenu("Product")} className={menu === "Product" ? "active" : ""}>
                Product
              </Link>
            </li>
            <li>
              {" "}
              <a href="#contact" onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+62-812-8645-3334</li>
            <li>GroceryShop@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
