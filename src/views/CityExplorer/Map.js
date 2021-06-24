import React, { Component } from 'react';

export class Map extends Component {
  render() {
    
    return (
      <div>
        <h3>Location Map for { this.props.location.search_query}</h3>

        { this.props.map && 
          <img src={this.props.map || ''} />
        }
      </div>
    )
  }
}

export default Map;
