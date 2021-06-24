import React, { Component } from 'react';
import Map from './Map';
import Restaurants from './Restaurants';
import location from '../../assets/data/location.json';
import restaurants from '../../assets/data/weather.json';
import map from '../../assets/Images/map.png';

export class CityExplorerMain extends Component {

constructor(props) {
  super(props)
  this.state = {
     displaySearchResults: false,
     locationObject: location,
     restaurants: restaurants
  }
}

handleLocationSearch = (event) => {
  event.preventDefault();
  {/** add set state to update view after search */}
  this.setState({displaySearchResults: true});
}

  render() {
    return (
      <div>
        
        <form onSumbit={this.handleLocationSearch}>
          <label>Find the Fun.</label>
          <input type="text"  name="search" placeholder="Enter a location." />
          <button type="sumbit">Find It!</button>
        </form>
        {/**add condtional rendering for search */}
        { this.state.displaySearchResults &&
          <>
            <Map 
            location={this.state.locationObject}
            map={map}
            />
            <Restaurants
            restaurants={this.state.restaurants}
            location={this.state.locationObject}
            />
         </>
        }
      </div>
    )
  }
}

export default CityExplorerMain;
