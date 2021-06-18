import React from 'react';
import SelectedFood from './SelectedFood';
import FoodMain from './FoodMain';
import jsonData from '../assets/data/data.json';


class FavoriteFoodMain extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      allFavoriteFoods: jsonData,
      displayAsModal: false,
      selectedFavoriteFood: {}
     
    }
  }
  
displayAsModal = (foodName) => {
  const selectedFavoriteFood = jsonData.find(favoriteFood => favoriteFood.title === foodName);
  this.setState({selectedFavoriteFood, displayAsModal: true });

}

handleClose = () => {
  this.setState({ displayAsModal: false})
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
      show={this.state.displayAsModal}
      handleClose={this.handleClose}
      />



      
      </div>
      

    
    )
  }
}

export default FavoriteFoodMain;