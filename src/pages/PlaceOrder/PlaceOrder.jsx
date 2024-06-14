import { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../components/context/StoreContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);

  const [data, setData] = useState({
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
    paymentMethod: "",
    voucher: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });
    console.log(orderItems);
  };

  const navigate = useNavigate();

  const formatPrice = (amount) => {
    return amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 });
  };

  const subtotal = getTotalCartAmount();
  const deliveryFee = 20000;
  const total = subtotal + deliveryFee;

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p>Checkout Information</p>

        <input required name="street" placeholder="Street" value={data.street} onChange={onChangeHandler} />
        <div className="multi-fields">
          <input required name="city" placeholder="City" value={data.city} onChange={onChangeHandler} />
          <input required type="text" name="state" placeholder="State" value={data.state} onChange={onChangeHandler} />
        </div>
        <div className="multi-fields">
          <input required name="zipcode" placeholder="Zip code" value={data.zipcode} onChange={onChangeHandler} />
          <input required name="country" placeholder="Country" value={data.country} onChange={onChangeHandler} />
        </div>
        <input required name="phone" placeholder="Phone number" value={data.phone} onChange={onChangeHandler} />

        <div className="payment-methods">
          <p>Payment Method</p>

          <div className="payment-method-option">
            <label htmlFor="creditCard">Credit/Debit Card</label>
            <img src={assets.debit_logo} alt="Credit/Debit Card" />
            <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" checked={data.paymentMethod === "creditCard"} onChange={onChangeHandler} />
          </div>

          <div className="payment-method-option">
            <label htmlFor="cod">Cash On Delivery</label>
            <img src={assets.cod_logo} alt="Cash On Delivery" />
            <input type="radio" id="cod" name="paymentMethod" value="cod" checked={data.paymentMethod === "cod"} onChange={onChangeHandler} />
          </div>

          <div className="payment-method-option">
            <label htmlFor="bankTransfer">Bank Transfer</label>
            <img src={assets.tf_logo} alt="Bank Transfer" />
            <input type="radio" id="bankTransfer" name="paymentMethod" value="bankTransfer" checked={data.paymentMethod === "bankTransfer"} onChange={onChangeHandler} />
          </div>

          <div className="payment-method-option voucher-option">
            <label htmlFor="voucher">Voucher</label>

            <input className="voucher-input" name="voucher" placeholder="Voucher" value={data.voucher} onChange={onChangeHandler} />
            <button className="apply-button" type="button">Apply</button>
          </div>
        </div>
      </div>

      <div className="place-order-right">
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
            <button type="submit" onClick={() => navigate("/order")}>
              Proceed To Payment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
