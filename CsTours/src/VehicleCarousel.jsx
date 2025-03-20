import React, { useEffect, useState } from 'react'
import { VehicleData } from "./VehicleData.jsx";
import "./vehicleCarousel.css"

function VehicleCarousel() {
    const[index,setIndex] = useState(0);

useEffect(()=>{
  let timer = setTimeout(()=>{
    handleNext();
   } ,5000);
   return()=>{  
    clearTimeout(timer);
  }  
   },[index]);

const handleNext=()=>{
    setIndex((index+1)% VehicleData.length);
}
  return (
    <div className='vehicle-carousel'>
        {VehicleData.map((vehicle,i)=>{
            return(
                <img key={i} src={vehicle.src} className={index=== i ? "show" : "block"}></img>
        )
        })}
    </div>
  )
}

export default VehicleCarousel