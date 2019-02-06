import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/navbar'
import ReminderList from './components/ReminderList'
import Home from './components/home'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      reminders: [],
      date: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000')
    .then (data => data.json())
      .then (res => {
        this.setState ({
          reminders: res,
          startDate: [],
          taskName: res.map(item => item.name)
        })
      })
  }

  clickDate = (event) => {
    this.setState({
      startDate: event
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar/>
            <Route path="/home" render={() => <Home clickDate={this.clickDate} options={this.state.taskName} />} />
            <Route path="/reminders/" component={ReminderList} /> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
