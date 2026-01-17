import React from 'react'
import "../assets/style/Productcard.css"

function Productcard() {
  return (
    <div>

        <div className='flex123'>

     <div className='cardet1'>
     
        <p>Organic</p>
<h5 style={{fontFamily: 'Trebuchet MS'}}> <b>Meat & Milk</b></h5>
<p>Premium quality meat & milk</p>
<div><button className='shop'>Shop Now</button></div></div>   


     <div className='cardet2'>
     
        <p>Organic</p>
<h5 style={{fontFamily: 'Trebuchet MS'}}> <b>Vegitable</b></h5>
<p>Premium quality meat & milk</p>
<div><button className='shop'>Shop Now</button></div></div>   

     <div className='cardet3'>
     
        <p>Organic</p>
<h5 style={{fontFamily: 'Trebuchet MS'}}> <b>Food & Fruits</b></h5>
<p>Premium quality meat & milk</p>
<div><button className='shop'>Shop Now</button></div></div>   
    
</div>
    </div>
  )
}

export default Productcard