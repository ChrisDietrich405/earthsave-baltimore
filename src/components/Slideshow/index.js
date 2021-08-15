import { useState, useEffect } from "react"
import slideshow1 from "../../assets/images/slideshow1.png"
import slideshow2 from "../../assets/images/slideshow2.png"
import slideshow3 from "../../assets/images/slideshow3.png"

import "./styles.scss"

export default function Slideshow() {


    useEffect(() => {
    const divs = document.querySelectorAll('.slideshow div')
    let index = 1;

    setInterval(function () {
      
      if (document.querySelector(".inactive")) {
        document.querySelector(".inactive").classList.remove("inactive");
      }

      if (document.querySelector(".active")) {
        document.querySelector(".active").classList.add("inactive");
        document.querySelector(".active").classList.remove("active");
      }
      divs[index % divs.length].classList.add("active")   
      index++

    }, 3000)

  }, [])


    return (
      <div className="slideshow-container">
        <div className="slideshow">
            <div className="active slideshow-image" style={{backgroundImage: `url(${slideshow1})`}}></div>  
            <div className="slideshow-image" style={{backgroundImage: `url(${slideshow2})`}}></div>
            <div className="slideshow-image" style={{backgroundImage: `url(${slideshow3})`}}></div>
        </div>
      </div>
      
    )
}

