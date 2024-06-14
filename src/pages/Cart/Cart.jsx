import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../components/context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  const navigate = useNavigate();

  const formatPrice = (amount) => {
    return amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 });
  };

  // Calculate subtotal by iterating over items in the cart and summing up prices
  const subtotal = food_list.reduce((acc, item) => {
    if (cartItems[item._id] > 0) {
      return acc + (item.price * cartItems[item._id]);
    }
    return acc;
  }, 0);

  const deliveryFee = 20000; // Delivery fee set to 20,000

  // Total is the sum of subtotal and delivery fee
  const total = subtotal + deliveryFee;

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{formatPrice(item.price)}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{formatPrice(item.price * cartItems[item._id])}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{formatPrice(subtotal)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{formatPrice(deliveryFee)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{formatPrice(total)}</b>
            </div>
            <button onClick={() => navigate('/order')}>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
