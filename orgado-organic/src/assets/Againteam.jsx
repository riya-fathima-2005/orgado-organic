import React from 'react'
import "../assets/style/Againteam.css"
import chips from "../assets/Img/chips.webp";
import coffee from "../assets/Img/coffee.webp";
import cup from "../assets/Img/cup.webp";
import cartoon from "../assets/Img/cartoon.jpg";
import nonsliderimg from "../assets/Img/nonsliderimg.webp"
import broadbeen from "../assets/Img/Broadbean.webp"

const iggos =[
 {
    id: 3,
    Image: coffee,
    name: "Artisan Cold Brew Coffee Concentrate",
    price: "$25.00",
  },
  { id: 4, Image: cup, name: "Ceramic Coffee Mug", price: "$12.00" },
  { id: 5, Image: chips, name: "Triangular shaped chips", price: "$9.00" },
    { id: 6, Image: cartoon, name: "Test", price: "$20.00" },
    // {id:17, image:broadbeen, name:"Premium Broad bean", price:"$40.00"},
  
];

function Againteam() {


  return (
    <div>
        <div className='flex flexible'> <div style={{fontFamily:"Trebuchet MS", marginLeft: "50px", marginBottom: "40px"}}>  <h2><b> Flash Sale!  </b></h2></div>

        <div onClick={() => sliderRef.current?.slickPrev() }><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="circle" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/> </svg></div>
          <div onClick={ () => sliderRef.current?.slickNext()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="circle" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg></div>

        
    <div className="fontw"> <h2><b>You May Browse</b></h2></div>

    
          <div className=" divcom  ">
          <div className="licomp2">View All</div>
          <div className="licomp2">New arrival</div>
          <div className="licomp2">Best Seller</div>
          <div className="licomp2">Trending</div></div>
          </div>

        <div  className="container1">

          <div className='nonsliderimg' style={{backgroundImage:  `url(${nonsliderimg})`, width:"300px",  height:"460px", borderRadius:"15px"}}>
           <p>freshly</p>
            <b style={{fontSize:"30px"}}>Maitta Potato</b>
           <p>from <span style={{color:"orange", fontSize:"35px" }}>  <b>$ 9.00</b></span></p>
          </div>

     
          
           {iggos.map((iggo) =>(
          
          <div className="imu" key={iggo.id}>
            
            <img className="watchwid2" src={iggo.Image} alt="products-image" />
            <div className="cntrname">
              <h5 className="center">{iggo.name}</h5>
              <h5 style={{ color: "green", marginLeft: "0px" }}> {iggo.price} </h5>
              <div className="color1">★★★★★</div></div>
          </div>
     
        ))}

         
        </div>


    </div>
  )
}

export default Againteam