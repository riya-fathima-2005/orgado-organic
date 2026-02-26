import React from 'react'
import "../assets/style/Slidteam.css";
import brand1 from "../assets/Img/brand1.webp";
import brand2 from "../assets/Img/brand2.webp";
import brand3 from  "../assets/Img/brand3.webp";
import brand4 from "../assets/Img/brand4.webp";
import brand5 from "../assets/Img/brand5.webp";
import Slider from 'react-slick';

function Slidteams(){
const settings={
  dots: true,
  infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
};

  return (
    <div className=' slider-container slider' >
      <Slider {...settings}>
     <div> <img src={brand1} alt="Brand1" /></div>
     <div> <img src={brand2} alt="Brand2" /></div>
     <div> <img src={brand3} alt="Brand3" /></div>
     <div> <img src={brand4} alt="Brand4" /></div>
     <div> <img src={brand5} alt="Brand5" /></div>
     <div> <img src={brand3} alt="Brand3" /></div>
    <div> <img src={brand2} alt="Brand2" /></div>
     <div> <img src={brand1} alt="Brand1" /></div>
     <div> <img src={brand4} alt="Brand4" /></div>
      </Slider>

    </div>
  )
}

export default Slidteams