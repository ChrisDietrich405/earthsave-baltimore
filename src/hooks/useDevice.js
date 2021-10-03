import { useState, useEffect } from "react";

export default function useDevice() {

    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setHeight(window.innerHeight)
            setWidth(window.innerWidth)
        })       
        return () => {
            window.removeEventListener("resize")
        }
    }, [])

    return {height, width}
}