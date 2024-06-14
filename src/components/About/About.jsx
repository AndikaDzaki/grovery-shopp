import heroImage from "../../assets/hero.png";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-text">
        <h1 className="about-h1">
          Always the Freshest <br /> <span className="span">Ingredients at the</span> <br />
          lowest price
        </h1>
        <p>There are many variations of passages of lorem ipsum available, but the majority have suffered</p>
        <ul>
          <li>Quality Vegetables</li>
          <li>Affordable Price</li>
          <li>Organically Grown</li>
          <li>Chemical Free</li>
        </ul>
      </div>
      <div className="about-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default About;
