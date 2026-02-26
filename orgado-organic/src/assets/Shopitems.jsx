import React, { useState } from 'react'
 import"../assets/style/Shopitem.css"
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import nonsliderimg1 from "../assets/Img/nonsliderimg.webp"
import {cards} from "../Data/Products"



const ratings =[
  {id:17, stars:5 , count:8},
  {id:18, stars:4 , count:6},
  {id:19, stars:3 , count:8},
  {id:20, stars:2, count:2},
  {id:21, stars:1 , count:0},

];





function Shopitems() {
  const [search , setSearch] = useState ("");
  const filterProducts = cards.filter((item) =>
    item.name.toLowerCase (). includes (search.toLowerCase())
  );

  return (
    <div className='flex3'>


<div>
      <div className="dropdown">
  <button
    className="btn btn-success dropdown-toggle" style={{marginLeft:"30px", marginTop:"30px"}} type="button" data-bs-toggle="dropdown"
  >
    View All categories
  </button>

  <ul className="dropdown-menu">
     <li><a className="dropdown-item" href="#">Testings</a></li>
    <li><a className="dropdown-item" href="#">HF</a></li>
     <li><a className="dropdown-item" href="#">Grocery & Staples</a></li>
      <li><a className="dropdown-item" href="#"> Organic Food </a></li>
       <li><a className="dropdown-item" href="#"> Biscuits & Snacks</a></li>
        <li><a className="dropdown-item" href="#">Fresh Fruits</a></li>
         <li><a className="dropdown-item" href="#">Fruit & vegetables</a></li>
  </ul>
</div>



 <div className='radiowidth'><h5><b>All categories</b> </h5>
  <label > <input className='radiowidth1' type="radio" /> View All </label><br />
  <label > <input className='radiowidth1' type="radio" /> Testings </label><br />
  <label > <input className='radiowidth1' type="radio" /> HF </label><br />
  <label > <input className='radiowidth1' type="radio" /> Grocery & Staples </label><br />
 <label > <input className='radiowidth1' type="radio" /> Organic Food </label><br />
  <label > <input className='radiowidth1' type="radio" /> Biscuits & Snacks </label><br />
 <label > <input className='radiowidth1' type="radio" /> Fresh Fruits </label><br />
 <label > <input className='radiowidth1' type="radio" />  Fruit & vegetables </label><br />


 </div>
 
  <div className="ratings">
        <h5> <b>Ratings</b></h5>
        {ratings.map((rating, index) => (
            <div key={index}>
                <label style={{cursor:"pointer"}}>
                    <input style={{marginRight:"10px"}}  type="radio" name="rating"  />
 
                    {[...Array(5)].map((_,i) =>
                     i < rating.stars ? (
                <FaStar key={i} className='color1' />
              ) : (
                <FaRegStar  key={i} className='color1' />
              )
              )
              }
 
               <span style={{ marginLeft: "8px", color: "#555" }}>
              ({rating.count})
            </span>
                </label>
            </div>
        ))}
      </div>

      
        <div className='nonsliderimg'  style={{backgroundImage:  `url(${nonsliderimg1})`, width:"300px",  height:"460px", borderRadius:"15px", marginTop:"30px" , marginLeft:"30px" , marginBottom:"60px"}}>
      <p>freshly</p>
      <b style={{fontSize:"25px"}}>Maitta Potato</b>
      <p>from <span style={{color:"orange", fontSize:"25px" }}>  <b>$ 9.00</b></span></p>
                </div>
                
    
      </div>


      <div>
    <input type="text" placeholder='Search Keyword....'value={search}  onChange={(e)=> setSearch(e.target.value)} style={{width:"390px", padding:"10px", borderRadius:"5px", border:"1px solid grey"}} />


    <div>
 
          {filterProducts.length > 0 ? (
            filterProducts.map((item) => (
              <div key={item.id}>
                <div className="product-card">
                  <img
                    src={item.Image}
                    alt={item.name}
                    className="product-img"
                  />
                  <h6>{item.name}</h6>
                  <p className="price">${item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}

        </div>

      </div>

    </div>
  )
}

export default Shopitems