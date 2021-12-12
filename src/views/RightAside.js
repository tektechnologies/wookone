import React from 'react';
import { Card, ListGroupItem, ListGroup} from 'react-bootstrap';

class RightAside extends React.Component {
render() {
  return (
    
    <Card style={{ width: '35rem'}}>
      <Card.Body>
            <Card.Title>Upcoming Events:</Card.Title>
            <Card.Body>
              <Card.Link href="/">Go to Calendar</Card.Link>
            </Card.Body>
            <Card.Title>myWook</Card.Title>
      </Card.Body>


      <ListGroup className="list-group-flush">
            <ListGroupItem><span className="label label-default"> Business</span></ListGroupItem>
            <ListGroupItem><span className="label label-primary">Home Management</span></ListGroupItem>
            <ListGroupItem><span className="label label-success">Pet Care</span></ListGroupItem>
            <ListGroupItem><span className="label label-info">Art</span></ListGroupItem>
            <ListGroupItem><span className="label label-primary">Health</span></ListGroupItem>
            <ListGroupItem><span className="label label-success">Social</span></ListGroupItem>
      </ListGroup>


      <Card.Body>
        <Card.Link href="/">Network Tree</Card.Link>
        <Card.Link href="/">Career Vocations</Card.Link>
      </Card.Body>
   </Card>




          
            
        
     
  )
}
}

export default RightAside;