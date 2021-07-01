import React, { Component } from 'react';
import Map from './Map';
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
      errorMessage: ''
    }
  }
  updateCitySearch = (event) => {
    this.setState({searchQuery: event.target.value });
  }
  


  render() {
    return (
      <div>
      
      </div>
    )
  }
}
export default CityExplorerMain;
