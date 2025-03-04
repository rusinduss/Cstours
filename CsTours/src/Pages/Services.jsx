import React from "react";
import "../Css/Services.css";
import NavBar from "../Components/NavBar";
import Home from "./Home";
import Carousel from "../Carousel";


function Services() {
  return (
    
    <div className="services-container">
        <NavBar/>
      <div id="services">
        <div className='service-Box'>
          <p>Rent a Car & Taxi Service</p>
        </div>
        <div className='service-Box'>
          <p>Airport pickup and Drop Service</p>
        </div>
        <div className='service-Box'>
          <p>Tour Operators and Guides</p>
        </div>
        <div className='service-Box'>
          <p>Tours and Holiday Packages</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
