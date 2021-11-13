import { TiNews } from "react-icons/all"


import UpcomingEvents from "../../pages/UpcomingEvents"
import Sidebar from "../Sidebar"

const links=
  [
      {
          icon: (<TiNews/>),
          title: "No Upcoming Events Available",
          path: "/upcoming-events/upcoming-events",
          component: UpcomingEvents                
      },      
  ]



export default function RightSideBar() {
    return (
        <div className="app-sidebar">
            <h3>Upcoming Events</h3> 
            <Sidebar links={links}/>
        </div>
    )
}