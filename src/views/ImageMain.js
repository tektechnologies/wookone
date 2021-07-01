import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import FavoriteImages from './FavoriteImages';
import {Form}  from 'react-bootstrap';
import jsonData from '../assets/data/data.json'; 
import '../assets/css/Main.css';


class ImageMain extends React.Component {

  pathFinder = (event) => {
    console.log(event.target.value);

    const choosenPath = event.target.value;
    let pathGallery = jsonData;

    console.log('choosen path: ',choosenPath);

    if(choosenPath){

      console.log('choosen path: in the if', choosenPath);
      console.log(jsonData);

      pathGallery = jsonData.filter((path) => 
        path.keyword === choosenPath);
        
    }
    console.log('this shows the filtered json data', pathGallery);
    this.props.displayFilteredImages(pathGallery);
  };




  render(){
    return(
        <div className="imageContainer">
          <Form>
            <Form.Group>
              <Form.Label><h1>What Worlds Inspire you?</h1></Form.Label>
              <Form.Control as="select" onChange={this.pathFinder}> 
                <option value="">All Paths</option>
                <option value=""></option>
                <option value="food">Food</option>
                <option value="trail">Trail</option>
                <option value="nature">Nature</option>
                <option value="technologies">Technology</option>
                <option value="ocean">Ocean</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <CardColumns>
            {this.props.allFavoriteImages.map((favoriteImage, idx) => (
              <FavoriteImages
                key={idx}
                index={idx}
                src={favoriteImage.image_url}
                title={favoriteImage.title}
                description={favoriteImage.description}
                displayAsModal={this.props.displayAsModal}
            />
               ))}
          </CardColumns>
        </div>
    )
  }
}

export default ImageMain;