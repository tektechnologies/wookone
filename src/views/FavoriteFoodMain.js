import React from 'react';
import FavoriteFoods from './FavoriteFoods';
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
       
      </CardColumns>
      </div>
      

    
    )
  }
}

export default FavoriteFoodMain;