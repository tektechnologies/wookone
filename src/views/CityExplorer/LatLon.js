import React from 'react';

class LatLon extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to {this.props.city }</h2>
        <p>{this.props.city } is located at {this.props.lat } latitude by this { this.props.lon } longitude.</p>
      </div>
    )
  }
}

export default LatLon;
