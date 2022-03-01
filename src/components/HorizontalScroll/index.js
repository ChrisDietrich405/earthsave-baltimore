import React, { useState } from "react";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { links } from "../LeftSideBar";
import { links as rightLinks } from "../RightSideBar";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/all";

import "./styles.scss";

function HorizontalScroll() {
  const [currentLinksIndex, setCurrentLinksIndex] = useState(0);
  return (
    <div className="horizontal-scroll-container">
      <LeftArrow
        changeCurrentLink={() => setCurrentLinksIndex(currentLinksIndex - 1)}
      />
      <div className="horizontal-link">{links[currentLinksIndex].title}</div>
      <RightArrow
        changeCurrentLink={() => setCurrentLinksIndex(currentLinksIndex + 1)}
      />
    </div>
    // <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    //   {[...links, ...rightLinks].map((link, index) => (
    //     <div className="horizontal-links-wrapper" itemId={index}>
    //       <Link to={link.path} className="horizontal-link">
    //         {link.title}
    //       </Link>
    //     </div>
    //   ))}
    // </ScrollMenu>
  );
}

function LeftArrow({ changeCurrentLink }) {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <div
      disabled={isFirstItemVisible}
      className="arrows"
      onClick={() => {
        scrollPrev();
        changeCurrentLink();
      }}
    >
      <AiOutlineArrowLeft size={30} className="arrow" />
    </div>
  );
}

function RightArrow({ changeCurrentLink }) {
  // const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  console.log(changeCurrentLink);
  return (
    <div
      // disabled={isLastItemVisible}
      className="arrows"
      onClick={() => {
        scrollNext();
        changeCurrentLink();
      }}
    >
      <AiOutlineArrowRight size={30} />
    </div>
  );
}

export default HorizontalScroll;
