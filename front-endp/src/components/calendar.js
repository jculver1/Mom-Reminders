import React from 'react'
import DatePicker from "react-datepicker";


const Calendar = (props) => {
    return(
        <DatePicker onChange={(event) => props.clickDate(event)}/>
    )
}

export default Calendar