import { useState } from "react";
import { useHistory } from "react-router-dom";

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
      history.push(links[currentLinkIndex + 1].path);
      setCurrentLinkIndex(currentLinkIndex + 1);
    } else {
      history.push(links[0].path);
      setCurrentLinkIndex(0);
    }
  };

  const prevLink = () => {
    if (currentLinkIndex !== 0) {
      history.push(links[currentLinkIndex - 1].path);
      setCurrentLinkIndex(currentLinkIndex - 1);
    } else {
      history.push(links[links.length - 1].path);
      setCurrentLinkIndex(links.length - 1);
    }
  };

  return (
    <div className="horizontal-navbar-container">
      {" "}
      <AiOutlineArrowLeft onClick={prevLink} size={30} className="arrows" />
      <div className="horizontal-link">{links[currentLinkIndex].title}</div>
      <AiOutlineArrowRight onClick={nextLink} size={30} className="arrows" />
    </div>
  );
}
