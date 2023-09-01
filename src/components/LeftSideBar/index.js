import News from "../../pages/News";
import Fascinating from "../../pages/Fascinating";
import Recommended from "../../pages/Recommended";
import Frequently from "../../pages/Frequently";
import Local from "../../pages/Local";
import Restaurants from "../../pages/Restaurants";
import Article from "../../pages/Article";
import Sidebar from "../Sidebar";

import "./styles.scss";

export const leftLinks = [
  { 
    title: "News & Events Update",
    path: "/news/news",
    component: News,
  },
  {
    title: "Fascinating Facts & Quotes",
    path: "/fascinating/fascinating",
    component: Fascinating,
  },
  {
    title: "Recommended Resources",
    path: "/recommended/recommended",
    component: Recommended,
  },
  {
    title: "Frequently Asked Questions",
    path: "/frequently/frequently",
    component: Frequently,
  },
  {
    title: "Local Nutrition & Medical Professionals",
    path: "/local/local",
    component: Local,
  },
  {
    title: "Local Restaurants",
    path: "/restaurants/restaurants",
    component: Restaurants,
  },
  {
    title: "Article: The He(art) of Gentle Persuasion",
    path: "/article",
    component: Article,
  },
];

export default function LeftSideBar() {
  return (
    <div className="sidebar-left-container">
      <Sidebar links={leftLinks} />
    </div>
  );
}
