import React from "react";
import { images as localImages } from "./images";

export default function ImageSlider() {
  const [index, setIndex] = React.useState(0);
  const images = localImages;
  return (
    <div className="w-100 h-70 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl">
      <div className=" relative">
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="w-100 h-70  rounded-2xl"
        />
        <div
          className=" fixed top-1/2 right-2 cursor-pointer select-none"
          onClick={() => {
            if (index === images.length - 1) return;
            setIndex(index + 1);
          }}
        >
          +
        </div>
        <div
          className=" fixed top-1/2 left-2 cursor-pointer select-none"
          onClick={() => {
            if (index === 0) return;
            setIndex(index - 1);
          }}
        >
          -
        </div>
      </div>
    </div>
  );
}
