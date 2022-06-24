import { Switch, Route } from "react-router-dom";

import News from "../../pages/News";
import Fascinating from "../../pages/Fascinating";
import Recommended from "../../pages/Recommended";
import Frequently from "../../pages/Frequently";
import Local from "../../pages/Local";
import Restaurants from "../../pages/Restaurants";
import Article from "../../pages/Article";
import UpcomingEvents from "../../pages/UpcomingEvents";
import Home from "../../pages/Home";
import Donate from "../../pages/Donate";
import Membership from "../../pages/Membership";
import Contact from "../../pages/Contact";
import EmailNewsletter from "../../pages/EmailNewsletter";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/donate" component={Donate} />
      <Route path="/membership" component={Membership} />
      <Route path="/contact" component={Contact} />
      <Route path="/news" component={News} />
      <Route path="/fascinating" component={Fascinating} />
      <Route path="/recommended" component={Recommended} />
      <Route path="/frequently" component={Frequently} />
      <Route path="/local" component={Local} />
      <Route path="/restaurants" component={Restaurants} />
      <Route path="/article" component={Article} />
      <Route path="/upcoming-events" component={UpcomingEvents} />
      <Route path="/email-newsletter" component={EmailNewsletter} />
    </Switch>
  );
}
