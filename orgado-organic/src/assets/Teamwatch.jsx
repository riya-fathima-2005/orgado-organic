import React from "react";
import "../assets/style/Teamwatch.css";
import watch from "../assets/Img/watch.webp";
import banana from "../assets/Img/Banana.webp";
import chips from "../assets/Img/chips.webp";
import coffee from "../assets/Img/coffee.webp"
import cup from "../assets/Img/cup.webp"
import cartoon from "../assets/Img/cartoon.jpg"

const cards = [
  { id: 1, Image:watch, name: "Watch", price: "$1200.00" },
  { id: 2, Image:banana, name: "Premium Banana bean", price: "$40.00" },
  { id: 3,Image: coffee, name: "Artisan Cold Brew Coffee Concentrate", price: "$25.00" },
  { id: 4,Image: cup, name: "Ceramic Coffee Mug", price: "$12.00" },
  { id: 5, Image: chips, name: "Triangular shaped chips", price: "$9.00" },
  { id: 6, Image:cartoon, name: "Test", price: "$20.00" },
  
];

function Teamwatch() {
  return (
    <div className="displaycnter">
      {cards.map((card) => (
        <div>
          <img className="watchwid" src={card.Image} alt="products-image" />
          
          <div className="cntrname"><h5 className="center">
            {card.name}
          </h5>
          <h5 style={{ color: "green", marginLeft: "60px" }}> {card.price}</h5></div>
        </div>
      ))}
    </div>
  );
}

export default Teamwatch;
