import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

export default class CityExplorerSearch extends React.Component {
  
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
            <Form.Label></Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          {
            {/** Put Error Here */}
          }
          {/**Button Goes Here */}
        </form>
       </div>
    )
  }
}

export default CityExplorerSearch;