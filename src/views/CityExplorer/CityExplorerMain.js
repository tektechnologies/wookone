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
      displayMapResults: false,
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
    //click on link in inspector see object data
    console.log(locIqUrl);


    let searchedLocation;
    try {
      // searchedLocation =  axios.get(locIqUrl);
      // console.log('promise pending', searchedLocation);
      searchedLocation =  await axios.get(locIqUrl);
      console.log('data object', searchedLocation);
      
      this.setState({
        location: searchedLocation.data[0].display_name,
        latitude: searchedLocation.data[0].lat,
        longitude:searchedLocation.data[0].lon,
        displayMapResults: true,
        displayError: false
      });

        } catch (err) {
          this.setState({
            displayMapResults :false,
            displayError: true,
            errorMessage: err.response.status + ': ' + err.response.data.err
          });
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
        {JSON.stringify(this.state)}
      </div>
    )
  }
}

export default CityExplorerMain;
