import React from 'react'
import "../assets/style/Toprated.css"
import nonsliderimg1 from "../assets/Img/nonsliderimg2.webp"
import Broadbean from "../assets/Img/Broadbean.webp"
import chips from "../assets/Img/chips.webp";
import cup from "../assets/Img/cup.webp";
import blueberrys from "../assets/Img/blueberrys.webp"




const bullets = [
  {
    id: 1,
    name: "Premium Broad bean",
    price: "$40.00",
    img: Broadbean,
    rating: 4
  },
  {
    id: 2,
    name: "Triangular shaped chips",
    price: "$9.00",
    img: chips,
    rating: 3
  },
  {
    id: 3,
    name: "Ceramic Coffee Mug",
    price: "$12.00",
    img: cup,
    rating: 5
  }
];

const builders = [
  { id: 1, img: blueberrys, price: "$", rating: 4 },
  { id: 2, img: blueberrys, price: "$", rating: 3 },
  { id: 3, img: blueberrys, price: "$", rating: 4 },
    { id: 3, img: blueberrys, price: "$", rating: 4 },
      { id: 3, img: blueberrys, price: "$", rating: 4 },
];

function Toprated() {
  return (
    <div >
      <div className='flexteam'>      <div><h3><b>Top Rated</b></h3></div>
      <div className='colorch'>View All    <span style={{marginLeft:"9px" , cursor:'pointer'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></span></div>

      <div><h3><b>Popular</b></h3></div>
      <div  className='colorch'>View All  <span style={{marginLeft:"9px", cursor:'pointer'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></span></div></div>

<div className='flexteam1'>
  <div>
       <div className="product-box">
      {bullets.map((bullet) => (
        <div className="product-card" key={bullet.id}>
          <img src={bullet.img} alt={bullet.name} />
          <div className="product-info">
            <h4>{bullet.name}</h4>
            <p className="price">{bullet.price}</p>
            <div className="rating">
              {"★".repeat(bullet.rating)}
              {"☆".repeat(5 - bullet.rating)}
            </div>
          </div>
        </div>
      ))}</div>  
      
       </div>

       <div>

<div className="popular-container">
  {builders.map((builder) => (
    <div className="popular-item" key={builder.id}>
      <img src={builder.img} alt="popular product" />

      <div className="popular-info">
        <span className="popular-price">{builder.price}</span>
        <div className="popular-rating">
          {"★".repeat(builder.rating)}
          {"☆".repeat(5 - builder.rating)}
        </div>
      </div>
    </div>
  ))} </div>
</div>


  
  

  <div className='nonsliderimg' style={{backgroundImage:  `url(${nonsliderimg1})`, width:"300px",  height:"460px", borderRadius:"15px"}}>
<p>freshly</p>
<b style={{fontSize:"25px"}}>Maitta Potato</b>
<p>from <span style={{color:"orange", fontSize:"25px" }}>  <b>$ 9.00</b></span></p>
          </div>
          
</div>







    </div>
  )
}

export default Toprated