import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3005')
    .then (data => data.json())
      .then (res => {
        this.setState ({
          name: res[0].name
        })
      })
  }


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
