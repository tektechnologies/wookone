import React, { Component } from 'react'

export class Restaurants extends Component {
  render() {
    return (
      <div>
        <h3>Restaurants in {this.props.location.search_query}</h3>
        <ul>
        { this.props.restaurants && this.props.restaurants.map((place, index) => {
          <li key={index}>
            <p>Restaruant Name: {place.restaurant}</p> 
            <p>Food Genre: {place.restaurant} serves {place.cusine} food in {place.locality} </p>
          </li>
        })
          
        
        
        }
        </ul>
      </div>
    )
  }
}

export default Restaurants
