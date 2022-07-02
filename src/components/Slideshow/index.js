import { useState, useEffect } from "react";

import { FaPlay, FaPause } from "react-icons/fa";

import "./styles.scss";

import slideshow1 from "../../assets/images/1.jpg";
import slideshow2 from "../../assets/images/2.jpg";
import slideshow3 from "../../assets/images/3.jpg";
import slideshow4 from "../../assets/images/4.jpg";
import slideshow5 from "../../assets/images/5.jpg";
import slideshow6 from "../../assets/images/6.jpg";
import slideshow7 from "../../assets/images/7.jpg";
import slideshow8 from "../../assets/images/8.jpg";
import slideshow9 from "../../assets/images/9.jpg";
import slideshow10 from "../../assets/images/10.png";
import slideshow11 from "../../assets/images/11.jpg";
import slideshow12 from "../../assets/images/12.jpg";
import slideshow13 from "../../assets/images/13.jpg";
import slideshow14 from "../../assets/images/14.jpg";
import slideshow15 from "../../assets/images/15.jpg";

import PlayNormal from "../../assets/images/PlayNormal.svg";
import PauseNormal from "../../assets/images/PauseNormal.svg";

export default function Slideshow() {
  const imageArray = [
    slideshow1,
    slideshow2,
    // slideshow3,
    slideshow4,
    slideshow5,
    slideshow6,
    slideshow7,
    slideshow8,
    // slideshow9,
    slideshow10,
    slideshow11,
    slideshow12,
    // slideshow13,
    slideshow14,
    // slideshow15,
  ];

  const [pause, setPause] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pause) {
        return;
      }
      changePicture();
    }, 3000);

    return () => clearInterval(interval);
  }, [index, pause]);

  const handlePause = () => {
    setPause(!pause);
    changePicture();
  };

  const changePicture = () => {
    if (index === imageArray.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="slideshow-container" onClick={() => handlePause()}>
      <div className="slideshow">
        <div className="controls">
          {pause ? (
            <div className="pause-btn">
              <img className="slideshow-btn" src={PlayNormal} />
            </div>
          ) : (
            <div className="play-btn">
              <img className="slideshow-btn" src={PauseNormal} />
            </div>
          )}
        </div>
        {imageArray.map((image, i) => (
          <img
            className={`${index === i ? "active" : "inactive"} slideshow-image`}
            src={image}
          ></img>
        ))}
      </div>
    </div>
  );
}
