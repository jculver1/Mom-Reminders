import React from 'react'
import { props } from 'bluebird';

const Card = () => {
    return (
      // <div className="valign-wrapper">
          <div className="section row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Don't Forget</span>
                <h4>{props.taskName}</h4>
                <p>{props.taskDescription}</p>
              </div>
              <div className="card-action">
                <a href="/#">Update</a>
                <a href="/#">Delete</a>
              </div>
            </div>
          </div>
        </div>
      // </div>
    )
  }
  
  export default Card