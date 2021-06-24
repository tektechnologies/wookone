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
     
  }
}



methodName = (params) => {
  
}









  render() {
    return (
      <div>
        
        <form>
        <label></label>
        <input></input>
        <button></button>
        </form>


        <Map />
        <Restaurants />


      </div>
    )
  }
}

export default CityExplorerMain;
