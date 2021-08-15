import { Link } from "react-router-dom"

import Slideshow from "../../components/Slideshow"
import Sidebar from "../../components/Sidebar"

import "./styles.scss"

export default function Home() { 
    return (   
        <div className="home-container">
            <div><Sidebar 
                // title="Example title" 
                links={[
                    // {title: "Example title 01", path: "path_01"}, 
                    // {title: "Example title 02", path: "path_02"}
                ]} /></div>
            <div><Slideshow /></div>
        </div> 
    )
}