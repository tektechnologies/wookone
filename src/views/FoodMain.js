import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import FavoriteFoods from './FavoriteFoods';

class FoodMain extends React.Component {

  render(){
    return(
         <CardColumns>
         {this.props.allFavoriteFoods.map((food, idx) => (
          
          <FavoriteFoods 
            key={idx}
            index={idx}
            src={food.image_url}
            title={food.title}
            description={food.description}
            displayAsModal={this.props.displayAsModal}
         />
          
    ))}
         </CardColumns>
    )
  }
}

export default FoodMain;