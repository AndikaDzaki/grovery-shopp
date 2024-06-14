import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Ganti dengan useNavigate
import "./LoginPopup.css"; 
import { assets } from "../../assets/assets";
import { StoreContext } from "../context/StoreContext"; 

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const navigate = useNavigate(); // Ganti dengan useNavigate

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const mockApiCall = (url, data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (currState === "Login") {
          if (data.email === "test@example.com" && data.password === "password123") {
            resolve({ success: true, token: "mockToken123", message: "Login successful" });
          } else {
            resolve({ success: false, message: "Invalid email or password" });
          }
        } else {
          resolve({ success: true, token: "mockToken123", message: "Registration successful" });
        }
      }, 1000);
    });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    const newUrl = `${currState === "Login" ? "api/user/login" : "api/user/register"}`;

    const response = await mockApiCall(newUrl, data);

    if (response.success) {
      setToken(response.token);
      localStorage.setItem("token", response.token);
      setShowLogin(false);
      navigate("/"); // Redirect to dashboard
    } else {
      alert(response.message);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Your name" required />}
          <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Your email" required />
          <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required />
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

LoginPopup.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default LoginPopup;
