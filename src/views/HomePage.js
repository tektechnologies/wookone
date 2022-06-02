import React from 'react';
import '../assets/css/HomePage.css';
import {
  Container, 
  Row, 
  Col,
  Button,
  Jumbotron} from 'react-bootstrap';


class HomePage extends React.Component {

  render(){
    return(
      <div className="container text-center">  
        <div className="row homePageMain">
          <Container fluid>
            <Row>
              <Col>
                <Jumbotron className='mt-5'>
                    <h1>Welcome to wookOne.</h1>
                    <marquee>We hope you enjoy your time.</marquee>
                    <p><Button variant="primary">Learn more</Button></p>
                </Jumbotron>
              </Col>
            </Row>
            {/* <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/id/281/200/175" />
                <Card.Body>
                  <Card.Title>City Explorer</Card.Title>
                  <Card.Text>
                    Plan your Path, City Explorer Awaits.
                  </Card.Text>
                  <Button variant="primary" href="./CityExplorer/CityExplorerMain">
                  Go Somewhere</Button>
                </Card.Body>
            </Card> */}
          </Container>
        </div>
      </div>
    );
  }
}

export default HomePage;