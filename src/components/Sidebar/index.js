import { Link, Switch, Route } from "react-router-dom"

import classNames from "classnames"
import parser from "html-react-parser"

import "./styles.scss"

export default function Sidebar(props) {
    return (

        <div className="sidebar-container">
            <div className="sidebar-left">
                <div className="sidebar-title">
                    {/* <h4>{ props.title }</h4> */}
                    <ul></ul>
                </div>
                <ul>
                {props.links.map(link => (
                    <li>
                        <Link to={link.path} className={classNames("sidebar-subtitle", {active: window.location.pathname==link.path})}>
                            {parser(link.title)}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
            
            <div className="sidebar-center">

                {/* <Switch>
                  {props.links.map(link => {
                    return  <Route 
                          path={link.path}
                          component={link.component}
                      />
                  })}				 */}
                {/* </Switch>   */}
            </div>
        </div>  
    )
}