import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { SlideData } from "./SlideData";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div>
      <section className="slider  backdrop-blur-3xl from-slate-400">
        <ChevronLeftIcon
          onClick={nextSlide}
          className="left-arrow h-10 bg-pink-500 rounded-full"
        />
        <ChevronRightIcon
          onClick={prevSlide}
          className="right-arrow h-10 bg-pink-500 rounded-full"
        />

        {SlideData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="Furniture" className="image" />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ImageSlider;
