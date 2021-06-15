import React from 'react';
import '../assets/css/LeftAside.css';
import {Col, Card, ListGroupItem, ListGroup} from 'react-bootstrap';



class LeftAside extends React.Component {
render() {
  return (
    
          <Col>
              <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="Images/wooklogo.jpeg" /> */}
                <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                    <Card.Body>
                      <Card.Link href="/">My Profile</Card.Link>
                    </Card.Body>
                        <Card.Text>Interests</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                      <ListGroupItem><span className="label label-default">Weather</span></ListGroupItem>
                      <ListGroupItem><span className="label label-primary">Music</span></ListGroupItem>
                      <ListGroupItem><span className="label label-success">Farmers Markets</span></ListGroupItem>
                      <ListGroupItem><span className="label label-info">Hiking</span></ListGroupItem>
                      <ListGroupItem><span className="label label-primary">Weather</span></ListGroupItem>
                      <ListGroupItem><span className="label label-success">Friends</span></ListGroupItem>
                </ListGroup>
                <Card.Body>
                      <Card.Link href="/HikeATrail">Hike a Trail</Card.Link>
                      <Card.Link href="/Weather">Weather</Card.Link>
                      <Card.Link href="/YourMovies">Your Movies</Card.Link>
                      <Card.Link href="/FavoriteFoodMain">Favorite Foods</Card.Link>
                      <Card.Link href="/YelpFood">Find Local Food</Card.Link>
                </Card.Body>
            </Card>
          </Col>
        )
  }
}

export default LeftAside;



