import React from 'react';
import SelectedImage from './SelectedImage';
import ImageMain from './ImageMain';
import jsonData from '../assets/data/data.json';


class FavoriteImageMain extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      allFavoriteImages: jsonData,
      displayModal: false,
      selectedFavoriteImages: {}
     
    }
  }
  
displayAsModal = (favoritePic) => {
  const selectedFavoriteImages = jsonData.find(favoriteImage => favoriteImage.title === favoritePic);
  this.setState({selectedFavoriteImages, displayModal: true });

}

handleClose = () => {
  this.setState({ displayModal: false})
}

updateChoosenPaths = (allFavoriteImages) => {
  this.setState({allFavoriteImages})
}



  render() {
    return(
      <div>
      
       
      <ImageMain 
      allFavoriteImages={this.state.allFavoriteImages}
      displayAsModal={this.displayAsModal}
      displayFilteredImages={this.updateChoosenPaths}
      />

      <SelectedImage 
      selectedFavoriteImages={this.state.selectedFavoriteImages}
      show={this.state.displayModal}
      handleClose={this.handleClose}
      />



      
      </div>
      

    
    )
  }
}

export default FavoriteImageMain;