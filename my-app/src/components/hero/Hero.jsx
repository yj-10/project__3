import React from "react";
import "./hero.css";
import { FaAngleRight } from "react-icons/fa";
import card from "../../assets/card.webp";

const Hero = () => {
  return (
    <section>
      <div className="img__cont">
        <div className="home__image">
          <div className="home__items">
            <div className="Home__content">
              <h5>2024 called. Here’s 24% off.</h5>
              <p>
                Nothing like smart water purification to kickstart those
                hydration goals. Get up to 24% off now through Jan 2nd.
              </p>
              <a href=""></a>{" "}
              <button className="butt__owesome">
                {" "}
                Shop Now <FaAngleRight />
              </button>
            </div>
            <div id="card">
              <a href="">
                <img src={card} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
