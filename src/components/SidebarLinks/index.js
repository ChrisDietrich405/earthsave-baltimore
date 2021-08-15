import Sidebar from "../Sidebar"
import News from "../../pages/News"
import Restaurants from "../../pages/Restaurants"

export default function SidebarLinks() {
    return (
        <Sidebar links={
            [
                {
                    title: "News",
                    path: "/news/news",
                    component: News
                },
                {
                    title: "Restaurants",
                    path: "/restaurants/restaurants",
                    component: Restaurants
                }
            ]
        }/>
    )
}