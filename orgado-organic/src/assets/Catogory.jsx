import React from "react";
import "../assets/style/Catogory.css";
import vegcard from "../assets/Img/vegcard.webp";
import icecard from "../assets/Img/icecard.webp";
import junkcard from "../assets/Img/junkcard.webp";
import Oilcard from "../assets/Img/Oilcard.webp";

const products = [
  {
    id: 7,
    Image: vegcard,
    name: "Fruit & Vegetable",
    items: [
      "Cauliflower",
      "Orange",
      "Cucumber",
      "Banana",
      "Potato",
      "Chilly",
      "Strawberry"
    ]
  },
  {
    id: 8,
    Image: icecard,
    name: "Dairy Products",
    items: [
      "Butter",
      "Chocolate",
      "Honey",
      "Cheese",
      "Ice Cream",
      "Milk"
    ]
  },
  {
    id: 9,
    Image: junkcard,
    name: "Grocery & Staple",
    items: [
      "Noodle",
      "Oils",
      "Onion",
      "Red Gram",
      "Rice",
      "Flavor"
    ]
  },
  {
    id: 10,
    Image: Oilcard,
    name: "Miscellaneous",
    items: [
      "Nut & Seed",
      "Oils",
      "Fruits",
      "Tomato",
      "Soup",
      "More Product"
    ]
  }
];

function Catogory() {
  return (
    <div>
      <div className="flexing container">
        <div style={{ fontFamily: "Trebuchet MS", fontSize: "30px" }}>
          <b>Browse By Category</b>
        </div>
        <div>
          <a href="/" className="decor1">View all Category</a>
        </div>
      </div>

      <div className="flexx">
        {products.map((product) => (
          <div
            key={product.id}
            className="prodimg"
            style={{
              backgroundImage:  `url(${product.Image})`,
              gap: "10px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              marginLeft: "50px" , 
              height:"300px",
              marginBottom:"30px",

            }}
          >
            <h4>{product.name}</h4>

            <ul>
              {product.items.map((item, index) => (
                <li key={index} className="itemss">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Catogory;