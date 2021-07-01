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


export class CityExplorerMain extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      displaySearchResults: false,
      locationObject: location,
      weather: weather,
      restaurants: restaurants
    }
  }

  handleLocationSearch = (event) => {
    event.preventDefault();
    console.log(location, restaurants, weather);
    /** add set state to update view after search */
    this.setState({displaySearchResults: true});
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
