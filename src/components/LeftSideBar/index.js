// import {
//   TiNews,
//   ImQuotesLeft,
//   GrResources,
//   BsQuestionSquare,
//   GiMedicalPackAlt,
//   BiRestaurant,
//   AiFillHeart,
// } from "react-icons/all";

import News from "../../pages/News";
import Fascinating from "../../pages/Fascinating";
import Recommended from "../../pages/Recommended";
import Frequently from "../../pages/Frequently";
import Local from "../../pages/Local";
import Restaurants from "../../pages/Restaurants";
import Article from "../../pages/Article";

import Sidebar from "../Sidebar";

export const leftLinks = [
  {
    // icon: <TiNews />,
    title: "News & Events Update",
    path: "/news/news",
    component: News,
  },
  {
    // icon: <ImQuotesLeft />,
    title: "Fascinating Facts & Quotes",
    path: "/fascinating/fascinating",
    component: Fascinating,
  },
  {
    // icon: <GrResources />,
    title: "Recommended Resources",
    path: "/recommended/recommended",
    component: Recommended,
  },
  {
    // icon: <BsQuestionSquare />,
    title: "Frequently Asked Questions",
    path: "/frequently/frequently",
    component: Frequently,
  },
  {
    // icon: <GiMedicalPackAlt />,
    title: "Local Nutrition & Medical Professionals",
    path: "/local/local",
    component: Local,
  },
  {
    // icon: <BiRestaurant />,
    title: "Local Restaurants",
    path: "/restaurants/restaurants",
    component: Restaurants,
  },
  {
    // icon: <AiFillHeart />,
    title: "Article: The He(art) of Gentle Persuasion",
    path: "/article",
    component: Article,
  },
];

export default function LeftSideBar() {
  return (
    <div>
      <Sidebar links={leftLinks} />
    </div>
  );
}
