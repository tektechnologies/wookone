import React, { Component } from 'react';
import axios from 'axios'; 
import LatLon from './LatLon';
import Map from './Map';
import CityExplorerSearch from './CityExplorerSearch';
import { Container, Row, Col } from 'react-bootstrap';


class CityExplorerMain extends React.Component {
  
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
    console.log(event.target.value);
  }
  
  displayLatLon = async () => {
    const locIqUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`; 
    console.log(locIqUrl);

    let searchedLocation;
    try {
      searchedLocation = await axios.get(locIqUrl);
      console.log(searchedLocation);
          
        } catch (err) {
          
        }
  }

  render() {
    return (
      <div>
         <Container>
          <Row>
            <Col>
              <CityExplorerSearch 
                updateCitySearch={this.updateCitySearch}
                displayError={this.state.displayError}
                errorMessage={this.state.errorMessage}
                displayLatLon={this.displayLatLon}
              />
            </Col>
          </Row>
          <Row>
            <Col>
             {/** <LatLon /> */} 
            </Col>
          </Row>
          <Row>
            <Col>
             {/** <Map /> */} 
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default CityExplorerMain;
