import React from 'react'
import "../assets/style/MeatandMilk.css"
import garlicveg from "../assets/Img/product-banner-04.jpg"
import icecreen from "../assets/Img/product-banner-05.jpg"

function Meetandmilk() {
  return (
    <div>  
  
          
        <div className='flex123'>


     <div className='cardet2' style={{backgroundImage: `url(${garlicveg})`, width:"400px", height:"280px"}}>
     
        <p>Organic</p>
<h5 style={{fontFamily: 'Trebuchet MS'}}> <b>Meat & milk</b></h5>
<p>Meat & milk</p>
<div><button className='shop'>Shop Now</button></div></div>   

     <div className='cardet3'  style={{backgroundImage: `url(${icecreen})`, width:"500px", height:"280px"}}>
     
        <p>Organic</p>
<h5 style={{fontFamily: 'Trebuchet MS'}}> <b>Vegitable</b></h5>
<p>Premium quality meat & milk</p>
<div><button className='shop'>Shop Now</button></div></div>   
    
</div>
    </div>
  )
}

export default Meetandmilk