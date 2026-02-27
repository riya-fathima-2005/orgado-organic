import React, { useState } from "react";

import "../assets/style/Cart.css"
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

function Cart() {

  const [cartItems, setCartItems] = useState([
    { ...cards[0], quantity: 2 }
  ]);


  const increaseQty = (id) => {
    setCartItems(cards.map(card =>
      card.id === id
        ? { ...card, quantity: card.quantity + 1 }
        : card
    ));
  };


  const decreaseQty = (id) => {
    setCartItems(cards.map(card =>
      card.id === id && card.quantity > 1
        ? { ...card, quantity: card.quantity - 1 }
        : card
    ));
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };


  return (
    <div className="cart-container">

      <table>
        <thead>
          <tr>
            <th>Images</th>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.Image} alt={item.name} className="cart-img" />
              </td>

              <td>{item.name}</td>
              <td>{item.price}</td>

              <td>
                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </td>

              <td>{item.price * item.quantity}</td>

              <td>
                <button onClick={() => removeItem(item.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="clear-btn" onClick={clearCart}>
        Clear cart
      </button>

      <div className="cart-total">
      
        <h3>Cart Totals</h3>
          <table className="subtotal">
            <tr>
        <td>Subtotal:</td>
        </tr>
        <tr>
        <td>Total:</td>
        </tr>
        
          </table>
        <button className="checkout-btn">
          Proceed to checkout
        </button>
      </div>

    </div>
  );
}

export default Cart;