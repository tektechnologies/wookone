import React from 'react';
import FavoriteFoods from '../FavoriteFoods.js';

class FavoriteFood_Main extends React.Component {
  render() {
    return(
      <FavoriteFoods 
        title="Tacos"
        src="images/tacos.jpeg"
        description="A Taco!"
      />
    )
  }
}

export default FavoriteFood_Main;