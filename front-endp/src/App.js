import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Navbar from './components/navbar'
import ReminderList from './components/ReminderList'
import Home from './components/home'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: []
    }
  }

  componentDidMount(){
    fetch('https://polar-reaches-88179.herokuapp.com/')
    .then (data => data.json())
      .then (res => {
        this.setState ({
          name: res
        })
      })
  }


  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar/>
            <Route path="/home" exact component={Home} />
            <Route path="/reminders/" component={ReminderList} /> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
