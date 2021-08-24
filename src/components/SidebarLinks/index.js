import Sidebar from "../Sidebar"

import News from "../../pages/News"
import Fascinating from "../../pages/Fascinating"
import Recommended from "../../pages/Recommended"
import Frequently from "../../pages/Frequently"
import Local from "../../pages/Local"
import Restaurants from "../../pages/Restaurants"
import Article from "../../pages/Article"

import { TiNews, 
         ImQuotesLeft, 
         GrResources, 
         BsQuestionSquare, 
         GiMedicalPackAlt, 
         BiRestaurant, 
         AiFillHeart } from "react-icons/all"


export default function SidebarLinks() {
    return (
        <Sidebar links={
            [
                {
                    icon: (<TiNews/>),
                    title: "News & Events Update",
                    path: "/news/news",
                    component: News
                },
                {
                    icon: (<ImQuotesLeft/>),
                    title: "Fascinating Facts & Quotes",
                    path: "/restaurants/restaurants",
                    component: Fascinating
                },
                { 
                    icon: (<GrResources/>),
                    title: "Recommended Resources",
                    path: "/restaurants/restaurants",
                    component: Recommended
                },
                {
                    icon: (<BsQuestionSquare/>),
                    title: "Frequently Asked Questions",
                    path: "/restaurants/restaurants",
                    component: Frequently
                },
                {
                    icon: (<GiMedicalPackAlt/>),
                    title: "Local Nutrition & <br> Medical Professionals",
                    path: "/restaurants/restaurants",
                    component: Local
                },
                {
                    icon: (<BiRestaurant/>),
                    title: "Local Restaurants",
                    path: "/restaurants/restaurants",
                    component: Restaurants
                },
                {
                    icon: (<AiFillHeart/>),
                    title: "Article: The He(art) <br> of Gentle Persuasion",
                    path: "/restaurants/restaurants",
                    component: Article
                }

            ]
        }/>
    )
}