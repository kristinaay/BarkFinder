import React, { useEffect, useRef, useState } from "react";

import useSlider from "./hooks/useSlider";

const Slider = ({ images }) => {
  const slideImage = useRef(null);
  const slideText = useRef(null);
  console.log("Slide Image", images);
  const { goToPreviousSlide, goToNextSlide } = useSlider(
    slideImage,
    slideText,
    images
  );

  return (
    <div className="slider" ref={slideImage}>
      <h1>
        {" "}
        <p ref={slideText} className="feature--text"></p>{" "}
      </h1>

      <div className="slider--content">
        <button onClick={goToPreviousSlide} className="slider__btn-left">
          Previous dog
        </button>
        <button onClick={goToNextSlide} className="slider__btn-right">
          Next dog
        </button>
      </div>
    </div>
  );
};

export default Slider;
