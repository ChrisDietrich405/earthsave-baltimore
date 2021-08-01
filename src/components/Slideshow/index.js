import { useState, useEffect } from "react"
import slideshow1 from "../../assets/images/slideshow1.png"
import slideshow2 from "../../assets/images/slideshow2.png"
import slideshow3 from "../../assets/images/slideshow3.png"

import "./styles.scss"

export default function Slideshow() {

    const [slide, setSlide] = useState(0)

    const slideshow = [slideshow1, slideshow2, slideshow3]

    useEffect(() => {
        const loop = setInterval(() => {
            if(slide === slideshow.length - 1) {
                setSlide(0)
            } else {
                setSlide(slide + 1)
            }
        }, 5000)
        return () => clearInterval(loop)
    }, [slide])

    return (
        <div className="slideshow-container">
            {slideshow.map((image, index) => {
                 return (
                 <div key={index} className="active">
                    <img src={image} className="slideshow-image" alt="slideshow" />
                </div>
                )
            })}
        </div>
        // className={index === slide ? "active": ""}

    )
}

