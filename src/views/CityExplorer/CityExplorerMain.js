import React, { Component } from 'react';
import Map from './Map';
import Weather from './Weather';
import Restaurants from './Restaurants';
import location from '../../assets/data/location.json';
import restaurants from '../../assets/data/restaurant.json';
import weather from '../../assets/data/weather.json';
import map from '../../assets/Images/map.png';
import axios from 'axios'; 
import LatLon from './LatLon';
import CityExplorerSearch from './CityExplorerSearch';


export class CityExplorerMain extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      location: '',
      latitude: '',
      longitude: '',
      displaySearchResults: false,
      displayError: false,
      errorMessage: '',
      weather: weather,
      restaurants: restaurants
    }
  }
  updateCitySearch = (event) => {
    this.setState({searchQuery: event.target.value });
  }
  


  render() {
    return (
      <div>

        <div id="header">
          <h1>Find Your Path</h1>
          <p>Enter a location in the USA below to learn about the weather, restaurants, movies, and more!</p>
        </div>

        <form onSubmit={this.handleLocationSearch}>
          <label>Find the Fun.</label>
          <input type="text"  name="search" placeholder="Enter a location." />
          <button type="sumbit">Find It!</button>
        </form>

        {/**add condtional rendering for search */}
        { this.state.displaySearchResults &&

          <div>
            <Map 
            location={this.state.locationObject}
            map={map}
            />
            <Weather
            weather={this.state.weather}
            location={this.state.locationObject}
            />
            <Restaurants
            restaurants={this.state.restaurants}
            location={this.state.locationObject}
            />
         </div>

        }
      </div>
    )
  }
}
export default CityExplorerMain;
