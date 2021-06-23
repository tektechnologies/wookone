import React from 'react';
import '../assets/css/LeftAside.css';
import {Col, Card, ListGroupItem, ListGroup} from 'react-bootstrap';



class LeftAside extends React.Component {
render() {
  return (
    
          <Col>
              <Card>
                {/* <Card.Img variant="top" src="Images/wooklogo.jpeg" /> */}
                <Card.Body>
                      <Card.Title>getWook</Card.Title>
                    <Card.Body>
                      <Card.Link href="/">My Profile</Card.Link>
                    </Card.Body>
                        <Card.Text>Interests</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                      <ListGroupItem><span className="label label-default"><Card.Link href="/Weather">Weather</Card.Link></span></ListGroupItem>
                      <ListGroupItem><span className="label label-primary"><Card.Link href="/Weather">Music</Card.Link></span></ListGroupItem>
                      <ListGroupItem><span className="label label-success"><Card.Link href="/Weather">Farmers Markets</Card.Link></span></ListGroupItem>
                      <ListGroupItem><span className="label label-info"><Card.Link href="/HikeATrail">Hiking</Card.Link></span></ListGroupItem>
                      <ListGroupItem><span className="label label-primary"><Card.Link href="/Weather">Weather</Card.Link></span></ListGroupItem>
                      <ListGroupItem><span className="label label-success"><Card.Link href="/YelpFood">Find Local Food</Card.Link></span></ListGroupItem>
                </ListGroup>
                <Card.Body>
                    
                      
                      <Card.Link href="/YourMovies">Your Movies</Card.Link>
                      <Card.Link href="/FavoriteImageMain">Favorite Images</Card.Link>
                      
                </Card.Body>
            </Card>
          </Col>
        )
  }
}

export default LeftAside;



