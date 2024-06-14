import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite product here</h2>
        <p>Explore And Buy the best fresh product quality with our shop. They Are Many variations</p>
        <Link to="/product">
          <button>View Product</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
