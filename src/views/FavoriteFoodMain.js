import React from 'react';
import FavoriteFoods from './FavoriteFoods';
import Card from 'react-bootstrap/Card';



class FavoriteFoodMain extends React.Component {

  constructor(props){
    this.state = {
      favorites: 0
    }
  }


 addFavoriteCount = () => {
   this.state({favorites: this.state.favorites + 1});
 }




  render() {
    return(
      <Card 
        style={{width: '18rem'}}
        bg="dark"
        text="light"
        onClick={this.addFavorite}
        >
        <Card.Img varitant="top" src={this.props.src} />
        <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        😎 = {this.state.favorites}
        </Card.Text>
        <Card.Text> 
          {this.props.description}
        </Card.Text>

        </Card.Body>
        </Card>

    
    )
  }
}

export default FavoriteFoodMain;