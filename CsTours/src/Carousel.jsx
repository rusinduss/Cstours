import { useEffect, useState } from "react";
import { PhotoData } from "./PhotoData";
import "./carousel.css";
import React from "react";

function Carousel() {
  const [currentindex, setCurrentindex] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentindex]);
  const handleNext = () => {
    setCurrentindex((currentindex + 1) % PhotoData.length);
  };
  return (
    <div className="carousel-container">
      {PhotoData.map((item, i) => {
        return (
          <img
            className={currentindex === i ? "img" : "block"}
            src={item.src}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default Carousel;
