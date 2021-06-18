import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



class SelectedFood extends React.Component {

render(){
  return (
    <Modal show={this.props.show} 
           onHide={this.props.handleClose}>
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>{this.props.selectedFood.title}</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
      <Card bg="dark" text="light" onClick={this.displayAsModal}
      >
      <Card.Img variant="top" alt={this.props.selectedFood.title} src={this.props.selectedFood.image_url}
      />
      
      <Card.Body>
        <Card.Title>{this.props.selectedFood.title}</Card.Title>
        <Card.Text>{this.props.selectedFood.description}</Card.Text>
      </Card.Body>
      </Card>
      </Modal.Body>
    
      <Modal.Footer>
      <Button onClick={this.props.handlClose}
        variant="secondary">Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
    </Modal>

  )
 }
}

export default SelectedFood;