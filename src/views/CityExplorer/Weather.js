import React, { Component } from 'react';
import { Container, Card, Button, Row } from 'react-bootstrap';



export class Weather extends Component {
  
  render() {
    // console.log('weather page ', this.props.weather.map( weatherObject => weatherObject.date));
    // console.log('weather page ', this.props.weather.map( weatherObject => weatherObject));
    // console.log('location prop', this.props.city);
    return (
     
      this.props.weather.map((weatherObject, index) => (
        <div key={index}>

        <Container>
        <Row>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/id/281/200/175" />
          <Card.Body>
            <Card.Title>{this.props.city}</Card.Title>
            <Card.Text>
            High Temperatures: {weatherObject.max_temp}
            </Card.Text>
            <Card.Text>
            Todays Date: {weatherObject.date}
            </Card.Text>
            <Card.Text>
            Wind Direction: {weatherObject.wind_cdir}
            </Card.Text>
            <Card.Text>
            {weatherObject.description}
            </Card.Text>
            <Button variant="primary" href="./CityExplorer/CityExplorerMain">
            Go Here</Button>
          </Card.Body>
      </Card>
      </Row>
    </Container>    
        




      
         
        </div>
      ))
      
  
     
    )
  }
}

export default Weather;
