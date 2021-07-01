import React, { Component } from 'react';

export class Map extends Component {
  render() {
    
    return (
      <div>
        <h3>Location Map for { this.props}</h3>
          <img src={this.props} 
            alt={} 
            title={}
            roundedCircle
          />
      </div>
    )
  }
}
export default Map;
