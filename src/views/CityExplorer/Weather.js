import React, { Component } from 'react'

export class Weather extends Component {
  
  render() {
    console.log('props weather: ', this.props.weather['city_name']);
    return (
      <div>
      <h3>Weather in {this.props.location.search_query}</h3>
         
        {this.props.weather &&
        <div>
            <p>Weather Location: {this.props.weather['city_name'] }</p>
            <p>Weather lon: {this.props.weather['lon'] }</p>
            <p>Weather timezone: {this.props.weather['timezon'] }</p>
            <p>Weather lat: {this.props.weather['lat'] }</p>
            <p>Weather country_code{this.props.weather['country_code'] }</p>
            <p>Weather state_code: {this.props.weather['state_code'] }</p> 
        </div>
      }
      </div>
    )
  }
}

export default Weather;
