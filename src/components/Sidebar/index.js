import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import "./styles.scss";

export default function Sidebar(props) {
  const location = useLocation();

  return (
    <nav className="sidebar-container">
      <div className="sidebar-in">
        <ul>
          {props.links.map((link, index) => (
            <li key={index}>
              {link.icon}
              <Link
                to={link.path}
                className={classNames("sidebar-subtitle", {
                  active_item: location.pathname === link.path,
                })}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
