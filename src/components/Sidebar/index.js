import { Link, Switch, Route, useLocation } from "react-router-dom";
import classNames from "classnames";
import parser from "html-react-parser";

import "./styles.scss";

export default function Sidebar(props) {
  const location = useLocation();

  return (
    <div className="sidebar-container">
      <div className="sidebar-in">
        <div className="sidebar-title">
          <ul></ul>
        </div>
        <ul>
          {props.links.map((link) => (
            <li>
              {link.icon}
              <Link
                to={link.path}
                className={classNames("sidebar-subtitle", {
                  active_item: location.pathname == link.path,
                })}
              >
                {parser(link.title)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
