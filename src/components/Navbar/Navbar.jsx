import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isScrolled, setIsScrolled] = useState(false); 
  const { getTotalCartAmount, token, setToken, food_list } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleOrdersClick = () => {
    navigate("/myorders");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };
  const handleSettingClick = () => {
    navigate("/setting");
  };

  const filterFoodList = () => {
    return food_list.filter((food) => food.name.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  const handleSearchClick = () => {
    const filteredFoods = filterFoodList();
    console.log(filteredFoods);
  };

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
          Home
        </Link>
        <a href="#about" onClick={() => setMenu("About")} className={menu === "About" ? "active" : ""}>
          About
        </a>
        <Link to="/product" onClick={() => setMenu("Product")} className={menu === "Product" ? "active" : ""}>
          Product
        </Link>
        <a href="#contact" onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        {isSearchVisible ? (
          <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onBlur={() => setIsSearchVisible(false)} autoFocus />
        ) : (
          <img src={assets.search_icon} alt="" onClick={() => setIsSearchVisible(true)} />
        )}
        {isSearchVisible && <button onClick={handleSearchClick}>Search</button>}
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={handleProfileClick}>
                <img src={assets.profile_icon} alt="" />
                Profile
              </li>
              <li onClick={handleSettingClick}>
                <img src={assets.setting} alt="" />
                Setting
              </li>
              <li onClick={handleOrdersClick}>
                <img src={assets.bag_icon} alt="" />
                Orders
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
      <img src={assets.hamburger_icon} alt="Menu" className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />
    </div>
  );
};

Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Navbar;
