import React from 'react'
import MainButton from './MainButton.js'
import Calendar from './calendar'
import DropDownTasks from './DropDownTasks'

const Home = (props) => {
    return(
        <div class="container">
            <DropDownTasks/>
            <Calendar clickDate={props.clickDate}/>
            <MainButton/>
        </div>
    )
}

export default Home