import PropTypes from "prop-types";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, token } = useContext(StoreContext);

  return (
    <div>
      <div className="food-item">
        <div className="food-item-img-container">
          <img className="food-item-img" src={image} alt={name} />
          {token ? (
            !cartItems[id] ? (
              <img
                className="add"
                onClick={() => addToCart(id)}
                src={assets.add_icon_white}
                alt="Add to Cart"
              />
            ) : (
              <div className="food-item-counter">
                <img
                  onClick={() => removeFromCart(id)}
                  src={assets.remove_icon_red}
                  alt="Remove from Cart"
                />
                <p>{cartItems[id]}</p>
                <img
                  onClick={() => addToCart(id)}
                  src={assets.add_icon_green}
                  alt="Add to Cart"
                />
              </div>
            )
          ) : null}
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="Rating" />
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">Rp.{price}</p>
        </div>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FoodItem;
