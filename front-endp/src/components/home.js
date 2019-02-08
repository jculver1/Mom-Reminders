import React from 'react'
import MainButton from './MainButton.js'
import Calendar from './calendar'
import DropDownTasks from './DropDownTasks'

const Home = (props) => {
  return (
    <div className="container">

      <div className="section center-align">
        <h3>When do you need, Momma?</h3>
          <Calendar clickDate={props.clickDate} />
      </div>

      <br></br>
      <br></br>

      <div className="taskBar row center-align">
            <DropDownTasks options={props.options}>

      <br></br>
      <br></br>

      <div className="section center-align">
        <MainButton 
        setTask={props.setTask}/>
      </div>
      
    
    </div>
  )
}

export default Home