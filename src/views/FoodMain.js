import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import FavoriteImages from './FavoriteImages';
import {Form}  from 'react-bootstrap';
import jsonData from '../assets/data/data.json'; 

{/** So the above renders but this doesnt
  import {Form}  from 'react-bootstrap/Form';

  But this does work:
  import Form  from 'react-bootstrapForm';

  not sure why? 
*/}








class FoodMain extends React.Component {

 
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
        <div>
          <Form>
            <Form.Group>
              <Form.Label>What World?</Form.Label>
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
            {this.props.allFavoriteFoods.map((favoriteImage, idx) => (
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

export default FoodMain;