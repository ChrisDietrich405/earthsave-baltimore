import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/all";
import { leftLinks } from "../LeftSideBar";
import { rightLinks } from "../RightSideBar";

import "./styles.scss";

export default function HorizontalNavbar() {
  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);

  const links = [...leftLinks, ...rightLinks];

  const history = useHistory();

  const nextLink = () => {
    if (currentLinkIndex < links.length - 1) {
      setCurrentLinkIndex(currentLinkIndex + 1);
    } else {
      setCurrentLinkIndex(0);
    }
  };

  const prevLink = () => {
    if (currentLinkIndex !== 0) {
      setCurrentLinkIndex(currentLinkIndex - 1);
    } else {
      setCurrentLinkIndex(links.length - 1);
    }
    // history.push(links[currentLinkIndex - 1].path);
  };

  return (
    <div className="horizontal-navbar-container">
      {" "}
      <AiOutlineArrowLeft onClick={prevLink} size={30} className="arrows" />
      <Link to={links[currentLinkIndex].path} className="horizontal-link">
        {links[currentLinkIndex].title}
      </Link>
      <AiOutlineArrowRight onClick={nextLink} size={30} className="arrows" />
    </div>
  );
}
