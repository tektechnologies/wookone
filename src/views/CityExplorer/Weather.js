import React, { Component } from 'react';

export class Weather extends Component {
  
  render() {
    // console.log('weather page ', this.props.weather.map( weatherObject => weatherObject.date));
    // console.log('weather page ', this.props.weather.map( weatherObject => weatherObject));
    // console.log('location prop', this.props.city);
    return (
     
      this.props.weather.map((weatherObject, index) => (
        <div key={index}>
          <h2>{this.props.city}</h2> 
          <p>High Temperatures: {weatherObject.max_temp}</p> 
          <p>Todays Date: {weatherObject.date}</p> 
          <p>Wind Direction: {weatherObject.wind_cdir}</p> 
          <p>{weatherObject.description}</p> 
        </div>
      ))
      
  
     
    )
  }
}

export default Weather;
