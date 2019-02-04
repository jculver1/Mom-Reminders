import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AppRouter = (props) => (
<Router>
<div>
  <nav>
    <ul>
      <li>
        <Link to="/add">Add</Link>
      </li>
      <li>
        <Link to="/reminders/">Current Reminders</Link>
      </li>
    </ul>
  </nav>
  <Route path="/add" exact component={Add} />
  <Route path="/reminders/" component={ReminderList} /> 
</div>
</Router>
)

export default AppRouter