import React from 'react';
import SelectedFood from './SelectedImage';
import FoodMain from './ImageMain';
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

handleClose = () => {
  this.setState({ displayModal: false})
}

updateChoosenPaths = (allFavoriteFoods) => {
  this.setState({allFavoriteFoods})
}



  render() {
    return(
      <div>
      
       
      <FoodMain 
      allFavoriteFoods={this.state.allFavoriteFoods}
      displayAsModal={this.displayAsModal}
      displayFilteredImages={this.updateChoosenPaths}
      />

      <SelectedFood 
      selectedFavoriteFood={this.state.selectedFavoriteFood}
      show={this.state.displayModal}
      handleClose={this.handleClose}
      />



      
      </div>
      

    
    )
  }
}

export default FavoriteFoodMain;