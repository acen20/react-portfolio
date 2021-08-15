import React from "react";
import { images } from "./images";
import "./ImageSlider.css";

function ImageSlider() {
  return (
    <div className="image-slider">
      {images.map((image, index) => {
        return <img src={image.img} alt="something" />;
      })}
    </div>
  );
}

export default ImageSlider;
