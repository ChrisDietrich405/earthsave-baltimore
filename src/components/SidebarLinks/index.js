import Sidebar from "../Sidebar"

import News from "../../pages/News"
import Fascinating from "../../pages/Fascinating"
import Recommended from "../../pages/Recommended"
import Frequently from "../../pages/Frequently"
import Local from "../../pages/Local"
import Restaurants from "../../pages/Restaurants"
import Article from "../../pages/Article"

export default function SidebarLinks() {
    return (
        <Sidebar links={
            [
                {
                    title: "News & Events Update",
                    path: "/news/news",
                    component: News
                },
                {
                    title: "Fascinating Facts & Quotes",
                    path: "/restaurants/restaurants",
                    component: Fascinating
                },
                {
                    title: "Recommended Resources",
                    path: "/restaurants/restaurants",
                    component: Recommended
                },
                {
                    title: "Frequently Asked Questions",
                    path: "/restaurants/restaurants",
                    component: Frequently
                },
                {
                    title: "Local Nutrition & Medical Professionals",
                    path: "/restaurants/restaurants",
                    component: Local
                },
                {
                    title: "Local Restaurants",
                    path: "/restaurants/restaurants",
                    component: Restaurants
                },
                {
                    title: "Article: The He(art) of Gentle Persuasion",
                    path: "/restaurants/restaurants",
                    component: Article
                }

            ]
        }/>
    )
}