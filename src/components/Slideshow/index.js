import { useState, useEffect } from "react";
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
  useEffect(() => {
    const divs = document.querySelectorAll(".slideshow div");
    let index = 1;

    const interval = setInterval(function () {
      if (document.querySelector(".inactive")) {
        document.querySelector(".inactive").classList.remove("inactive");
      }

      if (document.querySelector(".active")) {
        document.querySelector(".active").classList.add("inactive");
        document.querySelector(".active").classList.remove("active");
      }
      divs[index % divs.length].classList.add("active");
      index++;
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        <div
          className="active slideshow-image"
          style={{
            objectFit: "contain",
            backgroundImage: `url(${slideshow1})`,
          }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: `url(${slideshow2})` }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: `url(${slideshow3})` }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: `url(${slideshow4})` }}
        ></div>
        <div
          className="slideshow-image"
          style={{
            backgroundImage: `url(${slideshow5})`,
          }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: `url(${slideshow6})` }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: `url(${slideshow7})` }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: `url(${slideshow8})` }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: `url(${slideshow9})` }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: `url(${slideshow10})` }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: `url(${slideshow11})` }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: `url(${slideshow12})` }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: `url(${slideshow13})` }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: `url(${slideshow14})` }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: `url(${slideshow15})` }}
        ></div>
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
