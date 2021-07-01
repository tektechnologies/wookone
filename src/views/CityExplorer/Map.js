import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

export class Map extends Component {
  render() {
    
    return (
      <div>
        <h3>Location Map for { this.props}</h3>
          <Image src={this.props} 
            alt={} 
            title={}
            roundedCircle
          />
      </div>
    )
  }
}
export default Map;
