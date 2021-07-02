import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

class CityExplorerSearch extends React.Component {
  
  handleLocationSearch = (event) => {
    event.preventDefault();
    this.props.displayLatLon();
  }

  render() {
    return (
      <div>
        <div id="header">
          <h1>Search City</h1>
        </div>
        <form onSubmit={this.handleLocationSearch}>
          <Form.Group>
            <Form.Label>Select Location.</Form.Label>
            <Form.Control onChange={this.props.updateCitySearch} type="text" placeholder="Enter a City"></Form.Control>
          </Form.Group>
          {
            this.props.displayError && 
            <>
              <Alert variant="danger">
                <strong>Error {''}</strong> 
                {this.props.errorMessage}, please try another search.
              </Alert>
            </>
           
          }
          {/**Button Goes Here */}
        </form>
       </div>
    )
  }
}

export default CityExplorerSearch;