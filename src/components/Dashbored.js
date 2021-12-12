import React from 'react';
import '../assets/css/HomePage.css';
import {
  Container, 
  Row, 
  Col,
  Button,
  Jumbotron} from 'react-bootstrap';


class Dashbored extends React.Component {

  render(){
    return(
      <div className="container text-center">  
        <div className="row homePageMain">
          <Container fluid>
            <Row>
              <Col>
                <Jumbotron className='mt-2'>
                    <h1>Local</h1>
                    <p>wookOne</p>
                  
                </Jumbotron>
              </Col>
            </Row>
             <Row>
              <Col>
                <Jumbotron className='mt-2'>
                    <h1>Regional</h1>
                    <p>wookOne</p>
                    
                </Jumbotron>
              </Col>
            </Row>
             <Row>
              <Col>
                <Jumbotron className='mt-2'>
                    <h1>World</h1>
                    <p>wookOne</p>
                    
                </Jumbotron>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Dashbored;