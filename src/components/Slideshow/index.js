import { useState } from "react";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import slideshow1 from "../../assets/images/1.jpg";
import slideshow2 from "../../assets/images/2.jpg";
import slideshow3 from "../../assets/images/3.jpg";
import slideshow4 from "../../assets/images/4.jpg";
import slideshow5 from "../../assets/images/5.jpg";
import slideshow6 from "../../assets/images/6.jpg";
import slideshow7 from "../../assets/images/7.jpg";
import slideshow8 from "../../assets/images/8.jpg";
import slideshow9 from "../../assets/images/9.png";
import slideshow10 from "../../assets/images/10.jpg";
import slideshow11 from "../../assets/images/11.jpg";
import slideshow12 from "../../assets/images/12.jpg";

import "./styles.scss";

export default function Slideshow() {
  const imageArray = [
    slideshow1,
    slideshow2,
    slideshow3,
    slideshow4,
    slideshow5,
    slideshow6,
    slideshow7,
    slideshow8,
    slideshow9,
    slideshow10,
    slideshow11,
    slideshow12,
  ];

  const [index, setIndex] = useState(0);

  const nextPicture = () => {
    if (index === imageArray.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevPicture = () => {
    if (index === 0) {
      setIndex(imageArray.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <section className="slideshow-container">
      <div className="slideshow">
        <div className="controls">
          <div className="arrow-btn">
            <button onClick={prevPicture}>
              <FaArrowAltCircleLeft />
            </button>
          </div>
          <div className="arrow-btn">
            <button onClick={nextPicture}>
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
        {imageArray.map((image, i) => (
          <img
            key={i}
            alt="slideshow"
            className={`${index === i ? "active" : "inactive"} slideshow-image`}
            src={image}
          />
        ))}
      </div>
    </section>
  );
}
