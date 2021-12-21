import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { links } from "../LeftSideBar";
import { links as rightLinks } from "../RightSideBar";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/all";

import "./styles.scss";

function App() {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {[...links, ...rightLinks].map((link, index) => (
        <div className="horizontal-links-wrapper" itemId={index}>
          <Link to={link.path} className="horizontal-link">
            {link.title}
          </Link>
        </div>
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <div
      disabled={isFirstItemVisible}
      className="arrows"
      onClick={() => scrollPrev()}
    >
      <AiOutlineArrowLeft size={30} className="arrow" />
    </div>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div
      disabled={isLastItemVisible}
      className="arrows"
      onClick={() => scrollNext()}
    >
      <AiOutlineArrowRight size={30} />
    </div>
  );
}

export default App;
