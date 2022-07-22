import React from 'react';
import '../assets/css/HomePage.css';
import {
  Container, 
  Row, 
  Col} from 'react-bootstrap';


class Dashbored extends React.Component {

  render(){
    return(
      <div className="container text-center">  
        <div className="row homePageMain">
          <Container fluid>
            <Row>
              <Col>
                
                    <h1>Local</h1>
                    <p>wookOne</p>
                  
               
              </Col>
            </Row>
             <Row>
              <Col>
              
                    <h1>Regional</h1>
                    <p>wookOne</p>
                    
                
              </Col>
            </Row>
             <Row>
              <Col>
                
                    <h1>World</h1>
                    <p>wookOne</p>
                    
               
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Dashbored;