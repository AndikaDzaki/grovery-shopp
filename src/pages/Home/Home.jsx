import "./Home.css";
import About from "../../components/About/About";
import Header from "../../components/Header/Header";


import FavoriteProduct from "../../components/FavoriteProduct/FavoriteProduct";
import ContactUs from "../../components/ContactUs/ContactUs";

const Home = () => {
  
  return (
    <div>
      <Header />
      <About/>
      <FavoriteProduct/>
      <ContactUs/>
      
    </div>
  );
};

export default Home;
