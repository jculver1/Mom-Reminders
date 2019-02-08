import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/navbar'
// import ReminderList from './components/ReminderList'
import Home from './components/home'
import data from './data.json'
import Card from './components/Card'

const url = "https://polar-reaches-88179.herokuapp.com/"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      reminders: data,
      date: '',
      // taskName: data.reminders[0].map(item => item.name),
      // taskDescription: data.reminders.map(item => item.description)
    }
  }

  componentDidMount(){
    fetch('https://polar-reaches-88179.herokuapp.com/')
    .then (data => data.json())
      .then (res => {
        this.setState ({
          reminders: res,
          date: [],
          taskName: res.map(item => item.name),
          taskDescription: res.map(item => item.description)
        })
      })
  }

  clickDate = (event) => {
  var stringified = event.toString()
    this.setState({
      startDate: stringified.slice(0, 15)
    });
  }

  // setTask = (event) => {
  //   this.setState({
  //     name: 
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route path="/home" render={() => <Home 
              clickDate={this.clickDate} 
              options={this.state.taskName} />} />
            <Route path="/reminders/"  render={() => <Card  
              date={this.state.date}
              taskName={this.state.taskName}
              taskDescription={this.state.taskDescription}
          /> } /> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App;