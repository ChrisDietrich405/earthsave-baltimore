import UpcomingEvents from "../../pages/UpcomingEvents";
import Sidebar from "../Sidebar";

import "./styles.scss";

export const rightLinks = [
  {
    title: "No Upcoming Events Available",
    path: "https://www.meetup.com/baltimore-vegan/",
    component: UpcomingEvents,
  },
];

export default function RightSideBar() {
  return (
    <div className="sidebar-right-container">
      <a
        style={{ marginTop: "30px", textDecoration: "none" }}
        href="https://www.meetup.com/baltimore-vegan/ "
        target="_blank"
        rel="noreferrer"
        className="facebook"
      >
        <p>Earthsave Events Schedule</p>
        <p>Please RSVP in Baltimore</p>
        Vegan Meetup group
      </a>
      {/* <Sidebar links={rightLinks} className="sidebar-right" /> */}
    </div>
  );
}
