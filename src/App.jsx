import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="background">
      <div className="box">
        <div className="box_1">
          <h1>Welcome To Paradise Nursery</h1>
          <div>Where Green Meets Serenity</div>
          <Link to={"products"}>
            {" "}
            <button>Get Started</button>
          </Link>
        </div>
        <div className="box_2">
          <h3>Our Mission</h3>
          <p>
            At Paradise Nursery, we are more than just a nursery; we are a
            sanctuary where nature and tranquility converge. Our mission is
            rooted in the belief that every leaf, every petal, and every seed
            holds the power to transform spaces and souls. We strive to
            cultivate a green oasis in each corner of your life, whether it's
            your garden, balcony, office, or indoor sanctuary. Our plants are
            carefully nurtured to bring peace, beauty, and a sense of harmony to
            all environments they touch.
          </p>
          <p>
            We take pride in our commitment to sustainable practices and a deep
            respect for the environment. Our team of horticulture experts and
            plant enthusiasts is dedicated to offering a diverse selection of
            plants that are both resilient and enchanting. We believe that
            caring for plants not only enriches your surroundings but also
            enhances well-being, reduces stress, and fosters a deeper connection
            with nature.
          </p>
          <p>
            Beyond providing plants, we aim to inspire and educate. Whether
            you're a seasoned gardener or a beginner with a budding passion for
            greenery, Paradise Nursery offers guidance, workshops, and resources
            to help you cultivate your green space with confidence. Join us on a
            journey to create a more sustainable, greener world—one plant at a
            time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
