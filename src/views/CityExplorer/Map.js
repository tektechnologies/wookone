import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

class Map extends Component {
  render() {
    
    return (
      <div>
        <h3>Location Map for { this.props}</h3>
          <Image src={this.props.image_url} 
            alt={this.props.city} 
            title={this.props.city}
            rounded Circle
          />
      </div>
    )
  }
}

export default Map;
