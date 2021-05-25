import React from 'react';
import FavoriteFoods from './FavoriteFoods';
import Taco from '../assets/Images/taco.jpeg';
class FavoriteFoodMain extends React.Component {
  render() {
    return(
      <FavoriteFoods 
        title="Tacos"
        src={Taco}
        description="A Taco!"
      />
    )
  }
}

export default FavoriteFoodMain;