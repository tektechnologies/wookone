import React from 'react';
import '../assets/css/HomePage.css';
import {
  Container, 
  Row, 
  Col,
  Button,
  Jumbotron } from 'react-bootstrap';


class HomePage extends React.Component {

  render(){
    return(

      <div className="container text-center">  
        <div className="row">
          <Container fluid>
            <Row>
              <Col>
                <Jumbotron >
                    <h1>Login or Register, or dont...just Stay Psyched!</h1>
                    <p>You have found wookOne, are you wook enough?</p>
                    <p><Button variant="primary">Learn more</Button></p>
                </Jumbotron>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default HomePage;