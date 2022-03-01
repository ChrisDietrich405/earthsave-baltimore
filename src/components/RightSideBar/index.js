// import { TiNews } from "react-icons/all"

import UpcomingEvents from "../../pages/UpcomingEvents";
import Sidebar from "../Sidebar";

import "./styles.scss";

export const rightLinks = [
  {
    //   icon: (<TiNews/>),
    title: "No Upcoming Events Available",
    path: "/upcoming-events/upcoming-events",
    component: UpcomingEvents,
  },
];

export default function RightSideBar() {
  return (
    <div className="app-sidebar app-sidebar-right">
      <h3>Upcoming Events</h3>
      <Sidebar links={rightLinks} className="sidebar-right" />
    </div>
  );
}
