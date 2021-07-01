import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

class Map extends Component {
  render() {
    
    return (
      <div>
        <h3>Location Map for { this.props}</h3>
          <Image src={this.props} 
            alt={this.props} 
            title={this.props}
            roundedCircle
          />
      </div>
    )
  }
}

export default Map;
