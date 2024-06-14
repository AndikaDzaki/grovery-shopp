import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from "./components/Footer/Footer"
import { useState } from "react"
import LoginPopup from "./components/LoginPopup/LoginPopup"
import Verify from "./pages/Verify/Verify"
import MyOrders from "./pages/MyOrders/MyOrders"
import Profile from "./components/Profile/Profile"
import Product from "./pages/Product/Product"
import Ulasan from "./pages/Ulasan/Ulasan"
import Setting from "./pages/Setting/Setting"




const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<PlaceOrder/>} />
        <Route path="/verify" element={<Verify />} />
        <Route path="myorders" element={<MyOrders />} />
        <Route path="profile" element={<Profile />} />
        <Route path="product" element={<Product />} />
        <Route path="ulasan" element={<Ulasan />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
