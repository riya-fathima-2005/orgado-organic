import React, { useRef, useState } from "react";
import "./style/Teamwatch.css";
import Slider from "react-slick";
import watch from "../assets/Img/watch.webp";
import banana from "../assets/Img/Banana.webp";
import chips from "../assets/Img/chips.webp";
import coffee from "../assets/Img/coffee.webp";
import cup from "../assets/Img/cup.webp";
import cartoon from "../assets/Img/cartoon.jpg";
import fresh from "../assets/Img/fresh-banner.png";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import ProductModel from "../assets/ProductModel" 

const cards = [
  { id: 1, Image: watch, name: "Watch", price: "$1200.00" },
  { id: 2, Image: banana, name: "Premium Banana bean", price: "$40.00" },
  { id: 3, Image: coffee, name: "Artisan Cold Brew Coffee Concentrate", price: "$25.00" },
  { id: 4, Image: cup, name: "Ceramic Coffee Mug", price: "$12.00" },
  { id: 5, Image: chips, name: "Triangular shaped chips", price: "$9.00" },
  { id: 6, Image: cartoon, name: "Test", price: "$20.00" },
];

function Teamwatch() {
  const sliderRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="dsply">
        <h2><b>You May Missed</b></h2>

        <ul className="dsply-1">
          <li className="viewall active">View All</li>
          <li className="viewall">New Arrival</li>
          <li className="viewall">Best Sale</li>
          <li className="viewall">Trending</li>
        </ul>

        <div className="arrow-box">
          <button onClick={() => sliderRef.current?.slickPrev()}>
            ◀
          </button>
          <button onClick={() => sliderRef.current?.slickNext()}>
            ▶
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="dis-items">

        {/* LEFT BANNER */}
        <div
          className="fresh-img"
          style={{ backgroundImage: `url(${fresh})` }}
        >
          <h5>Organic</h5>
          <h3>Fresh Masala</h3>
        </div>

        {/* SLIDER */}
        <Slider ref={sliderRef} {...settings}>
          {cards.map((card) => (
            <div key={card.id}>
              <div className="main-products">
                <span className="badge">new</span>

                <div className="image-wrapper">
                  <img
                    src={card.Image}
                    alt={card.name}
                    className="watch-img"
                  />

                  <div className="hover-icons">
                    <div className="icon-circle">
                      <FaShoppingCart />
                    </div>

                    {/* FIXED CLICK AREA */}
                    <div
                      className="icon-circle"
                      onClick={() => setSelectedProduct(card)} 
                    >
                      <FaEye />
                    </div>

                    <div className="icon-circle">
                      <FaHeart />
                    </div>
                  </div>
                </div>

                <h5>{card.name}</h5>
                <h6>{card.price}</h6>
                <div className="stars">{"★".repeat(5)}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <ProductModal
          product={ProductModel}
          closeModal={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default Teamwatch;
