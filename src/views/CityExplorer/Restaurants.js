
import React, { Component } from 'react'

export class Restaurants extends Component {
  render() {
    console.log('restaurants file ', this.props.restaurants);
    return (
      <div>
        <h3>Restaurants in {this.props.location.search_query}</h3>
          <ul>
            { 
                this.props.restaurants && this.props.restaurants.map((place, index) => {
                return (
                  <li key={index}>
                  <p>Restaruant Name: {place.restaurant}</p> 
                  <p>Food Genre: {place.restaurant} serves {place.cuisines} food in {place.locality} </p>
                </li>
                )
              }
           )}
          </ul>
      </div>
    )
  }
}
export default Restaurants;
