import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets, favorite_products } from "../../assets/assets";
import "./FavoriteProduct.css";

const FavoriteProduct = () => {
  const { cartItems, addToCart, removeFromCart, token } = useContext(StoreContext);

  return (
    <div className="favorite">
      <div className="favorite-text">
        <h1>Farm Favorite Product</h1>
      </div>
      <div className="favorite-row">
        {favorite_products.map(({ _id, name, price, description, image }) => (
          <div key={_id} className="favorite-product-card">
            <div className="favorite-product-img-container">
              <img className="favorite-product-img" src={image} alt={name} />
              {token ? (
                !cartItems[_id] ? (
                  <img
                    className="add"
                    onClick={() => addToCart(_id)}
                    src={assets.add_icon_white}
                    alt="Add to Cart"
                  />
                ) : (
                  <div className="favorite-product-counter">
                    <img
                      onClick={() => removeFromCart(_id)}
                      src={assets.remove_icon_red}
                      alt="Remove from Cart"
                    />
                    <p>{cartItems[_id]}</p>
                    <img
                      onClick={() => addToCart(_id)}
                      src={assets.add_icon_green}
                      alt="Add to Cart"
                    />
                  </div>
                )
              ) : null}
            </div>
            <div className="favorite-product-info">
              <div className="favorite-product-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="Rating" />
              </div>
              <p className="favorite-product-desc">{description}</p>
              <p className="favorite-product-price">Rp.{price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteProduct;
