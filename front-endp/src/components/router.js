import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AppRouter = (props) => (
<Router>
<div>
  <nav>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/reminders/">Current Reminders</Link>
      </li>
    </ul>
  </nav>
  <Route path="/add" exact component={Home} />
  <Route path="/reminders/" component={ReminderList} /> 
</div>
</Router>
)

export default AppRouter