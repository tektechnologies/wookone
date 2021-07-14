import React, { Component } from 'react';

export class Weather extends Component {
  
  render() {
    console.log('weather page ', this.props.weather.map( weatherObject => weatherObject.date));
    console.log('location prop', this.props.city);
    return (
     
      this.props.weather.map(weatherObject => (
        <div>
     
        
        
       
        weatherObject.date
        </div>
        

      ))
      
  
     
    )
  }
}

export default Weather;
