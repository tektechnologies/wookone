import React from 'react';
import '../assets/css/LeftAside.css';
import {Card, ListGroupItem, ListGroup} from 'react-bootstrap';



class LeftAside extends React.Component {
render() {
  return (
    
         
              <Card style={{ width: '35rem'}}>
                {/* <Card.Img variant="top" src="Images/wooklogo.jpeg" /> */}
                <Card.Body>
                      <Card.Title>getWook</Card.Title>
                    <Card.Body>
                      <Card.Link href="/"></Card.Link>
                    </Card.Body>
                        <Card.Text>Interests</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <span className="label label-default">
                          <Card.Link href="/Weather">Weather</Card.Link>
                        </span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <span className="label label-primary">
                          <Card.Link href="/LocalFood">Local Food</Card.Link>
                        </span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <span className="label label-success">
                          <Card.Link href="/FarmersMarket">Farmers Markets</Card.Link>
                        </span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <span className="label label-info">
                          <Card.Link href="/HikeATrail">Hiking</Card.Link>
                        </span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <span className="label label-primary">
                          <Card.Link href="/SkateShop">Skate Shops</Card.Link>
                        </span>
                      </ListGroupItem>
                      <ListGroupItem>
                        <span className="label label-success">
                          <Card.Link href="/LocalArt">Find Local Art</Card.Link>
                        </span>
                     </ListGroupItem>
                </ListGroup>
                <Card.Body>          
                      <Card.Link href="/YourMovies">Local Music</Card.Link>
                      <Card.Link href="/FavoriteImageMain">Local Retail</Card.Link>
                </Card.Body>
            </Card>
          
        )
  }
}

export default LeftAside;



