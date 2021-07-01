import React, { Component } from 'react'

export default class CityExplorerSearch extends React.Component {



  handleLocationSearch = (event) => {
    event.preventDefault();
    this.props.updateCitySearch();
  }




  render() {
    return (
      <div>
        
      </div>
    )
  }
}
