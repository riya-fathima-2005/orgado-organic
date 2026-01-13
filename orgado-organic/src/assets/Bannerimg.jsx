import "../assets/style/Bannerimg.css";
import leaf from "../assets/Img/banner-leaf.webp";
import banner from "../assets/Img/banner-3.webp";
import straw from "../assets/Img/banner-strawbarry.webp";

import React from "react";

function Bannerimg() {
  return (
    
    <>
      <div className="banner-flex">
        <div>
          <div>
            <img src={leaf} className="leaf" alt="Leaf" />
          </div>

          <div className="display-1 bannerwrite">
            {" "}
            <b>
              Organic <div className="display-1 bannerwrite"></div>Fresh Food
            </b>
          </div>

          <p className="para">
            Discover organic, sustainable food from our organic farm and <br />
            fresh vegetable, and food
          </p>

          <div>
            {" "}
            <button id="btn"> Shop Now</button>
          </div>
        </div>
        <div>
          <img src={banner} className="bannerimg" alt="bannerimg" />
        </div>
      </div>
      <div>
        <img src={straw} className="straw" alt="Strawbarry img" />
      </div>
    </>
  );
}

export default Bannerimg;
