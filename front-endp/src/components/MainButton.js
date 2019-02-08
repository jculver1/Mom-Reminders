import React from 'react'
import '../App.css'
import image from "./howlr.jpg"


const MainButton = () => {
  return (
    <div>
      <button className="callMomButton">
        <img src={image} alt="call mom"></img>
      </button>
    </div>
  )
}

export default MainButton