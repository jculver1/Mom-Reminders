import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {

  render() {
    return (

      <Router>
        <div className="App">
          {/* <a 
            className="btn-floating btn-large   waves-effect waves-light red"><i className="material-icons">
              add</i>
          </a> */}

        </div>
        <Router />

        );
      }
    }
    
    export default App;
