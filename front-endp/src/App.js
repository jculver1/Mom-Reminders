import React, { Component } from 'react';
import './App.css';
import AppRouter from './components/router';

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
        <AppRouter/>
      </div>
    );
  }
}

export default App;
