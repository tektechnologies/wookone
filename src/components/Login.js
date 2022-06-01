import React from 'react';
import {
  Container, 
  Row, 
  Col,
  Jumbotron} from 'react-bootstrap';


class Login extends React.Component {
  render() {
    return(
    

      <div className="container text-center">  
      <div className="row homePageMain">
        <Container fluid>
          <Row>
            <Col>
              <Jumbotron className='mt-2'>
                  <h1>Login</h1>
                  <p>wookOne</p>
                
              </Jumbotron>
            </Col>
          </Row> 
        </Container>
      </div>
    </div>

    )
  }
}

export default Login;