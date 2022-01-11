import Slideshow from "../../components/Slideshow";

export default function Home() {
  return (
    <div>
      <Slideshow />
    </div>
  );
}

// // import { Link } from "react-router-dom"

// import News from "../News"
// import Fascinating from "../Fascinating"
// import Recommended from "../Recommended"
// import Frequently from "../Frequently"
// import Local from "../Local"
// import Restaurants from "../Restaurants"
// import Article from "../Article"
// import UpcomingEvents from "../UpcomingEvents"

// import Slideshow from "../../components/Slideshow"
// import Sidebar from "../../components/Sidebar"
// import Routes from "../../components/Routes"
// // import Footer from "../../components/Footer"

// import { TiNews,
//     ImQuotesLeft,
//     GrResources,
//     BsQuestionSquare,
//     GiMedicalPackAlt,
//     BiRestaurant,
//     AiFillHeart } from "react-icons/all"

// import "./styles.scss"

// export default function Home() {
//     return (
//         <div className="home-container">
//            <Routes>
//                         <Sidebar links={
//               [
//                   {
//                       icon: (<TiNews/>),
//                       title: "News & Events Update",
//                       path: "/news/news",
//                       component: News
//                   },
//                   {
//                       icon: (<ImQuotesLeft/>),
//                       title: "Fascinating Facts & Quotes",
//                       path: "/fascinating/fascinating",
//                       component: Fascinating
//                   },
//                   {
//                       icon: (<GrResources/>),
//                       title: "Recommended Resources",
//                       path: "/recommended/recommended",
//                       component: Recommended
//                   },
//                   {
//                       icon: (<BsQuestionSquare/>),
//                       title: "Frequently Asked Questions",
//                       path: "/frequently/frequently",
//                       component: Frequently
//                   },
//                   {
//                       icon: (<GiMedicalPackAlt/>),
//                       title: "Local Nutrition &<br> Medical Professionals",
//                       path: "/local/local",
//                       component: Local
//                   },
//                   {
//                       icon: (<BiRestaurant/>),
//                       title: "Local Restaurants",
//                       path: "/restaurants/restaurants",
//                       component: Restaurants
//                   },
//                   {
//                       icon: (<AiFillHeart/>),
//                       title: "Article: The He(art) <br> of Gentle Persuasion",
//                       path: "/article/article",
//                       component: Article
//                   }

//               ]
//           }/>

//             <Slideshow />

//             <div className="app-sidebar">
//             <h3>Upcoming Events</h3>
//             <Sidebar links={
//               [
//                   {
//                       icon: (<TiNews/>),
//                       title: "No Upcoming Events Available",
//                       path: "/upcoming-events/upcoming-events",
//                       component: UpcomingEvents                },
//               ]
//           }/>
//             </div>
//             </Routes>
//         </div>
//     )
// }
