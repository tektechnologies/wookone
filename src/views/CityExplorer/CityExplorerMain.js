import React, { Component } from 'react';
import Map from './Map';
import Restaurants from './Restaurants';
import location from '../../assets/data/location.json';
import restaurant from '../../assets/data/weather.json';
import map from '../../assets/Images/map.png';

export class CityExplorerMain extends Component {

constructor(props) {
  super(props)

  this.state = {
     locationObject: location,
     restaurant: restaurant
  }
}



methodName = (params) => {
  
}









  render() {
    return (
      <div>
        
        <form>
        <label>Find the Fun.</label>
        <input    />
        <button>Find It!</button>
        </form>


        <Map 
        location={}
        map={map}
        />
        <Restaurants
        restaurants={}
        location={}
        />


      </div>
    )
  }
}

export default CityExplorerMain;
