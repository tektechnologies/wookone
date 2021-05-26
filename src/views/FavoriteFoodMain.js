import React from 'react';
import FavoriteFoods from './FavoriteFoods';
import jsonData from '../assets/data/data.json';
import CardColumns from 'react-bootstrap/CardColumns';


class FavoriteFoodMain extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      gallery: jsonData
    }
  }
  




  render() {
    return(
      <div>
      <CardColumns>

      <FavoriteFoods
      src = "https://picsum.photos/id/1041/200/300"
      title = "Wave"
      description = "A wave and a cloudy sky."
       / >
      <FavoriteFoods
      src = "https://picsum.photos/id/1065/200/300"
      title = "Ocean View"
      description = "A path to the ocean."
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/17/200/300"
      title = "On a Hike"
      description = "A trail for hiking outdoors."
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/177/200/300"
      title = "Back Packer"
      description = ""
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/180/200/300"
      title = "Apple Computer"
      description = "A Mac with air buds that have cords..."
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/190/200/300"
      title = "Hike in the woods."
      description = "The path we take alone."
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/2/200/300"
      title = "Mac Book"
      description = "Some Esspresso with my Mac please."
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/218/200/300"
      title = "Ocean Rain"
      description = "This just feels...."
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/237/200/300"
      title = "Lab Puppie"
      description = "Labrador puppies are the cutest."
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/239/200/300"
      title = "Hope"
      description = "Save the bees, plant some of these."
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/243/200/300"
      title = "Trees"
      description = "Off the path is where the finds are found."
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/281/200/300"
      title = "Skate"
      description = "Take Time to Make Time."
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/3/200/300"
      title = "iphone"
      description = "Iphone and Mac combo."
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/366/200/300"
      title = "Coffee First"
      description = "Code and Coffee"
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/429/200/300"
      title = "Raspberries"
      description = "Berry Berry so very..."
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/431/200/300"
      title = "Esspresso"
      description = "This is where it begins."
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/433/200/300"
      title = "Bear"
      description = "Beary Beary, very Beary..."
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/469/200/300"
      title = "Canoe"
      description = "This is fun."
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/493/200/300"
      title = "Milk and Cereal"
      description = "Breakfast is the most important meal of the days."
      />
      <FavoriteFoods
      src = "https://picsum.photos/id/491/200/300"
      title = "Tools"
      description = "This is where building began."
      />
      </CardColumns>
      </div>
      

    
    )
  }
}

export default FavoriteFoodMain;