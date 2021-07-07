import React  from 'react';
import Image from 'react-bootstrap/Image';

class Map extends React.Component {
  render() {
    
    return (
      <div>
        <h3>Location Map for { this.props.city}</h3>
          <Image src={this.props.image_url} 
            alt={this.props.city} 
            title={this.props.city}
            roundedCircle
          />
      </div>
    )
  }
}

export default Map;
