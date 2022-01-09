import { useState, useEffect } from "react";

import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";

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
    slideshow13,
    slideshow14,
    slideshow15,
  ];

  const [pause, setPause] = useState(false);
  const [index, setIndex] = useState(0);

  console.log(index);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pause) {
        // clearInterval(interval);
        return;
      }
      if (index === imageArray.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3000);
    console.log("gekki", interval);
    return () => clearInterval(interval);
  }, [index, pause]);

  // const pauseAndResume = () => {
  //   if (pause === false) {
  //     setPause(true);
  //   } else {
  //     setPause(false);
  //   }
  // };

  return (
    <div className="slideshow-container" onClick={() => setPause(!pause)}>
      {/* <button >pause</button> */}

      <div className="slideshow">
        {pause ? (
          <div className="pause-btn">
            <AiFillPauseCircle size={60} />
          </div>
        ) : (
          <div className="play-btn">
            <AiFillPlayCircle size={60} />
          </div>
        )}
        {imageArray.map((image, i) => (
          <img
            className={`${index === i ? "active" : "inactive"} slideshow-image`}
            // style={{
            //   height: "2000px !important",
            //   objectFit: "cover",
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "contain",
            //   backgroundImage: `url(${image})`,
            // }}
            src={image}
          ></img>
        ))}
      </div>
    </div>
  );
}

{
  /* <div className="slideshow-container">
      <div className="slideshow">
          <div className="active slideshow-image" style={{backgroundImage: `url(${slideshow1})`}}></div>  
          <div className="slideshow-image" style={{backgroundImage: `url(${slideshow2})`}}></div>
          <div className="slideshow-image" style={{backgroundImage: `url(${slideshow3})`}}></div>
      </div>
      </div> */
}
