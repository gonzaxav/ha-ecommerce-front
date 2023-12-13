import "./PhotoCarousel.css";
import React, { useEffect, useState } from "react";
import whiteLogo from "../img/logo_trasparente2.png";

function PhotoCarousel() {
  const [images, setImages] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    let imgArr = [
      { link: "/img/homeCarousel/1.jpg", active: false },
      { link: "/img/homeCarousel/2.jpg", active: false },
      { link: "/img/homeCarousel/3.jpg", active: false },
      { link: "/img/homeCarousel/4.jpg", active: false },
      { link: "/img/homeCarousel/5.jpg", active: false },
    ];
    imgArr[currentImg].active = true;
    setImages(imgArr);
  }, [currentImg]);

  useEffect(() => {
    if (images) {
      const intervalId = setInterval(() => {
        currentImg + 1 === images.length
          ? setCurrentImg(0)
          : setCurrentImg(currentImg + 1);
      }, 7000);

      return () => clearInterval(intervalId);
    }
  }, [images]);

  return (
    images && (
      <section>
        <img src={whiteLogo} alt="white-logo" className="white-logo" />
        <a href="#scroll-down-action">
          <div className="home-scroll-down text-center">
            <span className="scroll-down-text d-block">
              Vení a conocer nuestros productos
            </span>
            <span className="scroll-down-text d-block">más vendidos</span>
            <i class="fa-solid fa-angles-down scroll-down-icon"></i>
          </div>
        </a>
        <div className="home-scroll-shadow text-center">
          <span className="scroll-shadow-text d-block">
            Vení a conocer nuestros productos
          </span>
          <span className="scroll-shadow-text d-block">más vendidos</span>
          <i class="fa-solid fa-angles-down scroll-shadow-icon"></i>
        </div>
        <div className="w-100 vh-100 overflow-hidden">
          {images.map((img, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${img.link})` }}
              className={`photoCarousel ${
                img.active ? "photoCarouselActive" : ""
              }`}
            ></div>
          ))}
        </div>
      </section>
    )
  );
}

export default PhotoCarousel;
