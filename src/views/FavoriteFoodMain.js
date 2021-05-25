import React from 'react';
import FavoriteFoods from './FavoriteFoods';

class FavoriteFoodMain extends React.Component {
  render() {
    return(
      <FavoriteFoods 
        title="Tacos"
        src="../assets/images/tacos.jpeg"
        description="A Taco!"
      />
    )
  }
}

export default FavoriteFoodMain;