import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { links } from "../LeftSideBar";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/all";

import "./styles.scss";

function App() {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      <SidebarLinks />
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);

  return (
    <div disabled={isFirstItemVisible} className="arrows" onClick={() => scrollPrev()}>
      <AiOutlineArrowLeft />
    </div>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div disabled={isLastItemVisible} className="arrows" onClick={() => scrollNext()}>
      <AiOutlineArrowRight />
    </div>
  );
}

function SidebarLinks() {
  return (
    <div className="horizontal-links">
      {links.map((link) => (
        <Link to={link.path} className="horizontal-link">
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default App;
