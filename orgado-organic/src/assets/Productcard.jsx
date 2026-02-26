import React from 'react'
import "./style/Productcard.css"
import producta from "../assets/Img/product-banner-01.jpg"
import productb from "../assets/Img/product-banner-02.jpg"
import productc from "../assets/Img/product-banner-03.jpg"

function Productcard() {
  return (
    <div>

        <div className='flex123'>

     <div className='cardet1' style={{backgroundImage: ` url(${producta})`}} >
     
        <p>Organic</p>
<h5 style={{fontFamily: 'Trebuchet MS'}}> <b>Meat & Milk</b></h5>
<p>Premium quality meat & milk</p>
<div><button className='shop'>Shop Now</button></div></div>   


     <div className='cardet2' style={{backgroundImage:`url(${productb})`}}>
     
        <p>Organic</p>
<h5 style={{fontFamily: 'Trebuchet MS'}}> <b>Vegitable</b></h5>
<p>Premium quality meat & milk</p>
<div><button className='shop'>Shop Now</button></div></div>   

     <div className='cardet3'  style={{backgroundImage:`url(${productc})`}}>
     
        <p>Organic</p>
<h5 style={{fontFamily: 'Trebuchet MS'}}> <b>Food & Fruits</b></h5>
<p>Premium quality meat & milk</p>
<div><button className='shop'>Shop Now</button></div></div>   
    
</div>
    </div>
  )
}

export default Productcard