import React from 'react'
import { props } from 'bluebird';

const Card = () => {
    return (
        <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Laundry</span>
              <h4>Febuary 8 2019, 6:00 pm </h4>
              <p>Your laundry is getting moldy.</p>
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