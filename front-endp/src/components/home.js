import React from 'react'
import MainButton from './MainButton.js'
import Calendar from './calendar'

const Home = (props) => {
    return(
        <div class="container">
             <Calendar clickDate={props.clickDate}/>
            <MainButton/>
        </div>
    )
}

export default Home