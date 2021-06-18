import React from 'react';
import SelectedFood from './SelectedFood';
import FoodMain from './FoodMain';
import jsonData from '../assets/data/data.json';


class FavoriteFoodMain extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      allFavoriteFoods: jsonData,
      displayModal: false,
      selectedFavoriteFood: {}
     
    }
  }
  
displayAsModal = (foodName) => {
  const selectedFavoriteFood = jsonData.find(favoriteFood => favoriteFood.title === foodName);
  this.setState({selectedFavoriteFood, displayModal: true });

}



  render() {
    return(
      <div>
      
       
      <FoodMain 
      allFavoriteFoods={this.state.allFavoriteFoods}
      displayAsModal={this.displayAsModal}
      />

      <SelectedFood 
      selectedFood={this.state.allFavoriteFoods}
      show={this.state.displayModal}
      handleClose={this.handleClose}
      />



      
      </div>
      

    
    )
  }
}

export default FavoriteFoodMain;