import "../assets/style/Newinsight.css";
import React from 'react'
import newthumb1 from "../assets/Img/newthumb1.webp";
import newthumb2 from  "../assets/Img/newthumb2.webp";
import newthumb3 from  "../assets/Img/newthumb3.webp";


const carteams =[  
  {id:11 , Image: newthumb1, admin: "orgado-admin", date: "03/12/3023", time:" 11:34 am", names: "Things I Wish I Had Known About Angular When I Started New" },
  {id:12 , Image: newthumb2, admin: "John smith", date: "09/12/3023", time:" 11:22 am", names: "Unique Ideas for Healthy Food You Haven’t heard yet" },
  {id:13 , Image: newthumb3, admin: "Jennifer Lee", date: "09/12/3023", time:" 11:17 am", names: "Five Data-Loading Patterns To Boost Web Performance" },
]

function Newinsight() {
  return (
    <div className="classyleght">
      <h5 style={{color:"green", textAlign:"center", marginTop:"70px"}}>New sight</h5>
      <h1 style={{ textAlign:"center"}}><b >News From Orgado</b></h1>

      <div className="flexings">
           {carteams.map ((carteam) =>(
     <div  key={carteam.id}> 
      <img className="cardteam" src={carteam.Image} alt="thumbimages" />
    <div className="divlenght">
  {carteam.admin} • {carteam.date} • {carteam.time}
</div>

      <h4 style={{fontFamily: "Trebuchet MS ", display:"flex", width:"400px"}}> <b>{carteam.names}</b></h4>
   </div>
    ))}
      </div>

 





    </div>
  )
}

export default Newinsight