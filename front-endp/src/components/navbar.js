import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const NavBar = () => {
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo right">Logo</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li>
        <Link to="/home">Home</Link>
        </li>
        <li><Link to="/reminders/">Current Reminders</Link>
        </li>
      </ul>
    </div>
  </nav>
}

export default NavBar