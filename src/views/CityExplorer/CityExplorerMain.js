import React, { Component } from 'react';
import axios from 'axios'; 
import LatLon from './LatLon';
import Map from './Map';
import CityExplorerSearch from './CityExplorerSearch';
import { Container, Row, Col } from 'react-bootstrap';


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
              <CityExplorerSearch />
            </Col>
          </Row>
          {/** Display Map here. */
            <>
              <Row>
                <Col>
                  {/**Component Lat and Lon  */}
                  <LatLon />
                </Col>
              </Row>
              <Row>
                <Col>
                  {/**Component map */}
                  <Map />
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
