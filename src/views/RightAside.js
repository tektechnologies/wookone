import React from 'react';
import {Col, Card, ListGroupItem, ListGroup} from 'react-bootstrap';

class RightAside extends React.Component {
render() {
  return (
         
    <Col>
    <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src="Images/wooklogo.jpeg" />*/} 
      <Card.Body>
            <Card.Title>Upcoming Events:</Card.Title>
            <Card.Body>
        <Card.Link href="/">Go to Calendar</Card.Link>
       
      </Card.Body>
              <Card.Text>
              Interests
              </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
            <ListGroupItem><span className="label label-default">Glass Business</span></ListGroupItem>
            <ListGroupItem><span className="label label-primary">Drum Lessons</span></ListGroupItem>
            <ListGroupItem><span className="label label-success">Rental Properties</span></ListGroupItem>
            <ListGroupItem><span className="label label-info">Tek Business</span></ListGroupItem>
            <ListGroupItem><span className="label label-primary">Health</span></ListGroupItem>
            <ListGroupItem><span className="label label-success">Social</span></ListGroupItem>
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

export default RightAside;