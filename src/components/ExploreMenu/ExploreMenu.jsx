import PropTypes from "prop-types";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our product</h1>
      <p className="explore-menu-text">
        Fresh, Flavorful, and Fabulous: Elevate your everyday meals with our selection of fresh, flavorful groceries. Discover a world of culinary delights, from crisp produce to succulent meats and pantry staples.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div onClick={() => setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))} key={index} className="explore-menu-list-item">
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ExploreMenu;
