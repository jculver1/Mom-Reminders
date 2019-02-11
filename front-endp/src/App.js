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
      reminders: data.reminders,
      date: '',
      name: '',
      taskName: data.reminders.map(item => item.name),
      taskDescription: data.reminders.map(item => item.name)
    }
  }

  componentDidMount(){
    fetch('https://polar-reaches-88179.herokuapp.com/')
    .then (data => data.json())
      .then (res => {
        this.setState ({
          remindersTable: res
        })
      })
  }

  clickDate = (event) => {
  var stringified = event.toString()
    this.setState({
      date: stringified.slice(0, 15)
    });
  }

  deleteReminder = async (e) => {
    e.preventDefault()
    const removeReminder = this.state.remindersTable.filter(item => {
      if (item.id === ???) {
      }
      return !item.id
    })
    await fetch('https://polar-reaches-88179.herokuapp.com/reminders/???', {
      method: 'DELETE',
      body: JSON.stringify(removeReminder),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    this.setState({
      remindersTable: removeReminder,
    })
  }

  selectTask = (event) => {
    // event.preventDefault()
    const description = this.state.reminders.filter(item => item.name === event.value)
      
    this.setState({
      name: event.value,
      description: description[0].description,
      });
  }

  setTask = async (event) => {
    event.preventDefault()
    const newReminder = {
      // id: this.state.remindersTable.length + 1,
      date: this.state.date,
      name: this.state.name,
      description: this.state.description

    }
    console.log(newReminder)
    await fetch('https://polar-reaches-88179.herokuapp.com/reminders/', {
      method: 'POST',
      body: JSON.stringify(newReminder),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    this.setState({
     remindersTable: [...this.state.remindersTable, newReminder],
    })
    
  }


  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route path="/home" render={() => <Home 
              clickDate={this.clickDate} 
              options={this.state.taskName}
              selectTask={this.selectTask}
              setTask={this.setTask} />} />
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