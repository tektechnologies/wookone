import React, { Component } from 'react'

export default class CityExplorerSearch extends React.Component {



  handleLocationSearch = (event) => {
    event.preventDefault();
    this.props.updateCitySearch();
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
       </div>
    )
  }
}
