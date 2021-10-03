import { Link } from "react-router-dom"

import Slideshow from "../../components/Slideshow"
import Sidebar from "../../components/Sidebar"



import "./styles.scss"

export default function Home() { 
    return (   
        <div className="home-container">
           
            <Slideshow />
            
        </div> 
    )
}