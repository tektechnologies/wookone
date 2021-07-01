import React, { Component } from 'react';
import Map from './Map';
import axios from 'axios'; 
import LatLon from './LatLon';
import CityExplorerSearch from './CityExplorerSearch';


export class CityExplorerMain extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      location: '',
      latitude: '',
      longitude: '',
      displaySearchResults: false,
      displayError: false,
      errorMessage: ''
    }
  }
  updateCitySearch = (event) => {
    this.setState({searchQuery: event.target.value });
  }
  
  displayLatLon = async () => {
    
  }


  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              {/**City search component */}
            </Col>
          </Row>
          {/** Display Map here. */
            <>
              <Row>
                <Col>
                  {/**Component Lat and Lon  */}
                </Col>
              </Row>
              <Row>
                <Col>
                  {/**Component map */}
                </Col>
              </Row>
            </>
          }
        </Container>
      </div>
    )
  }
}
export default CityExplorerMain;
