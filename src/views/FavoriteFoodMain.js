import React from 'react';
import SelectedFood from './SelectedFood';
import FoodMain from './FoodMain';
import jsonData from '../assets/data/data.json';

import CardColumns from 'react-bootstrap/CardColumns';


class FavoriteFoodMain extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      allFavoriteFoods: jsonData,
      selectedFavoriteFood: {},
      displayModal: false
    }
  }
  
displayAsModel = (foodName) => {
  {/**find the title from the json set to const */}
  const selectedFavoriteFood = jsonData.find(favoriteFood => favoriteFood.title === foodName);
  this.setState({selectedFavoriteFood, displayModal: true });

}



  render() {
    return(
      <div>
      <CardColumns>
       
      <FoodMain 
      allFoods={this.state.allFavoriteFoods}
      displayAsModal={this.displayAsModel}
      />

      <SelectedFood 
      selectedFood={this.state.allFavoriteFoods}
      show={this.state.displayModal}
      handleClose={this.handleClose}
      />



      </CardColumns>
      </div>
      

    
    )
  }
}

export default FavoriteFoodMain;