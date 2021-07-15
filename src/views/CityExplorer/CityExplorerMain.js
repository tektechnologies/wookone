import React from 'react';
import axios from 'axios'; 
import LatLon from './LatLon';
import Map from './Map';
import Weather from './Weather';
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
      errorMessage: '',
      weather: []
    }
  }
  
  updateCitySearch = (event) => {

    this.setState({searchQuery: event.target.value });
    console.log(event.target.value);

  }
  









  displayLatLon = async () => {
    const locIqUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`; 
    //click on link in inspector see object data
    console.log('1. ',locIqUrl);

    let searchedLocation;
    try {
       searchedLocation =  axios.get(locIqUrl);
      // console.log('promise pending', searchedLocation);
      searchedLocation =  await axios.get(locIqUrl);
      console.log('data object 2', searchedLocation);
      
      this.setState({
        location: searchedLocation.data[0].display_name,
        latitude: searchedLocation.data[0].lat,
        longitude:searchedLocation.data[0].lon,
        displayMapResults: true,
        displayError: false
      });
     } catch (err) {
          this.setState({
            //handling errors on the location call
            displayMapResults :false,
            displayError: true,
            errorMessage: err.response.status + ': ' + err.response.data.err});
         }
         //this was showing code error not pretty... on search with "".
        //  console.log('3 searchedLocation.data[0].lat, searchedLocation.data[0].lon', searchedLocation.data[0].lat, searchedLocation.data[0].lon);
        // this.showWeather(searchedLocation.data[0].lat, searchedLocation.data[0].lon);
  }
 showWeather = async (lat, lon ) => {
   try {
      const weatherSearch = await axios.get(`${process.env.REACT_APP_SERVER}/weather`, {
        params:{latitude:lat, longitude:lon, searchQuery: this.state.searchQuery}
      });
      this.setState({
        weather: weatherSearch.data
      });
      
    } catch (err) {
        this.setState({
          //because if we have an error we do not want to show bad data
        displayMapResults: false,
        //let user know what is happening. maybe sell ad space here on errors and purposely build errors into system?
        displayError: true,
        errorMessage: err.response.status + ': ' + err.response.data.err
      });
      console.log('errrrrooooor : ', err.response.status + ': ' + err.response.data.err);
     }
     //trouble shoot the env. http://create-react-app.dev/docs/adding-custom-environment-variables/
     //WARNING: Do not store any secrets (such as private API keys) in your React app!  
     
     //What do they mean React App" front end env files or.....?
     let envi = process.env.REACT_APP_SERVER;
      console.log("envi",envi);
    
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
            { this.state.displayMapResults &&
              <div>
                <Row>
                   <Col>
                      <LatLon
                          city={this.state.location}
                          lat={this.state.latitude}
                          lon={this.state.longitude}
                      />
                   </Col>
                 </Row>
                 <Row>
                   <Col>
                      <Map              
                          image_url = {`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.latitude},${this.state.longitude}&size=${window.innerWidth}x350&format=jpg&zoom=12`}
                          city={this.state.location}
                      /> 
                      </Col>
                  </Row>
              </div>
            }
            <Row>
                <Col>
                   <Weather 
                      weather={this.state.weather}
                      city={this.state.location}
                    /> 
                </Col>
            </Row>
         </Container>
        {/** {JSON.stringify(this.state)}  */} 
      </div>
    )
  }
}

export default CityExplorerMain;
