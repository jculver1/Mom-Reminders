import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {


  render() {
    return (
      <div className="App">
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
            <Route path="/home" exact component={Home} />
            <Route path="/reminders/" component={ReminderList} /> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
