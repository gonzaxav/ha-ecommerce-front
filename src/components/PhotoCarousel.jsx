import "./PhotoCarousel.css";
import React, { useEffect, useState } from "react";

function PhotoCarousel() {
  const [images, setImages] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    let imgArr = [
      { link: "img/2.jpg", active: false },
      { link: "img/3.jpg", active: false },
      { link: "img/4.jpg", active: false },
      { link: "img/5.jpg", active: false },
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
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [images]);

  return (
    images && (
      <section>
        <div className="w-100 vh-100 overflow-hidden">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.link}
              className={`photoCarousel ${
                img.active ? "photoCarouselActive" : ""
              }`}
            ></img>
          ))}
        </div>
      </section>
    )
  );
}

export default PhotoCarousel;
