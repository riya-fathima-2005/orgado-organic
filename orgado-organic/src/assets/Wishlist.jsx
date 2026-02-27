import React from 'react'
import "../assets/style/Wishlist.css"
import { FaEraser } from 'react-icons/fa'
import watch from "../assets/Img/watch.webp";
import banana from "../assets/Img/Banana.webp";
import chips from "../assets/Img/chips.webp";
import coffee from "../assets/Img/coffee.webp";
import cup from "../assets/Img/cup.webp";
import cartoon from "../assets/Img/cartoon.jpg";


const cards = [
  { id: 1, Image: watch, name: "Watch", price: "$1200.00" },
  { id: 2, Image: banana, name: "Premium Banana bean", price: "$40.00" },
  { id: 3, Image: coffee, name: "Artisan Cold Brew Coffee Concentrate", price: "$25.00" },
  { id: 4, Image: cup, name: "Ceramic Coffee Mug", price: "$12.00" },
  { id: 5, Image: chips, name: "Triangular shaped chips", price: "$9.00" },
  { id: 6, Image: cartoon, name: "Test", price: "$20.00" },
];


function Wishlist() {
  return (
    <div>
      <section>
        <table>
          
          <thead>
            <tr>
              <th>Images</th>
              <th>Product</th>
              <th>Unit price</th>
              <th>Add to cart</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          
          <tbody>
           {cards.slice(0, 6).map((card) => (

              <tr key={card.id}>
                <td>
                  <img 
                    src={card.Image} 
                    alt={card.name} 
                    className='tble-img'
                  />
                </td>
                <td>{card.name}</td>
                <td>{card.price}</td>
                <td>
                  <button className='addtocart'>
                    Add to Cart
                  </button>
                </td>
                <td>{card.price}</td>
                <td><FaEraser /></td>
              </tr>
            ))}
          </tbody>

        </table>
      </section>
    </div>
  )
}

export default Wishlist