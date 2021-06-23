import React from 'react';
import {Col, Card, ListGroupItem, ListGroup} from 'react-bootstrap';

class RightAside extends React.Component {
render() {
  return (
    <Col>
    <Card>
    {/* <Card.Img variant="top" src="Images/wooklogo.jpeg" />*/} 
      <Card.Body>
            <Card.Title>Upcoming Events:</Card.Title>
            <Card.Body>
        <Card.Link href="/">Go to Calendar</Card.Link>
       
      </Card.Body>
      
      <Card.Title>myWook</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
            <ListGroupItem><span className="label label-default"> Business</span></ListGroupItem>
            <ListGroupItem><span className="label label-primary">Music Lessons</span></ListGroupItem>
            <ListGroupItem><span className="label label-success">Rental Properties</span></ListGroupItem>
            <ListGroupItem><span className="label label-info">Technology Business</span></ListGroupItem>
            <ListGroupItem><span className="label label-primary">Health</span></ListGroupItem>
            <ListGroupItem><span className="label label-success">Social</span></ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/">Family Tree</Card.Link>
        <Card.Link href="/">Education</Card.Link>
      </Card.Body>
   </Card>
 </Col>



          
            
        
     
  )
}
}

export default RightAside;