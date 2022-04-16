import UpcomingEvents from "../../pages/UpcomingEvents";
import Sidebar from "../Sidebar";

import "./styles.scss";

export const rightLinks = [
  {
    title: "No Upcoming Events Available",
    path: "/upcoming-events/upcoming-events",
    component: UpcomingEvents,
  },
];

export default function RightSideBar() {
  return (
    <div className="sidebar-right-container">
      <h3>Upcoming Events</h3>
      <Sidebar links={rightLinks} className="sidebar-right" />
    </div>
  );
}
