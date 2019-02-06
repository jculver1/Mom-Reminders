import React from 'react'
import '../App.css'
import image from "./CallMomButton.png"


const MainButton = () => {
  return (
    <div>
      <a 
        className="btn-floating btn-large waves-effect waves-light red">
        <i className="material-icons">Call Mom</i>
      </a>

      <img src={image} alt="call mom"></img>
      
    </div>
  )
}

export default MainButton