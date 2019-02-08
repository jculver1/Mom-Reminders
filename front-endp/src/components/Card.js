import React from 'react'
import { props } from 'bluebird';

const Card = () => {
    return (
        <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Don't Forget</span>
              <h4>{props.taskName}</h4>
              <p>{props.taskDescription}</p>
            </div>
            <div class="card-action">
              <a href="/#">Update</a>
              <a href="/#">Delete</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Card