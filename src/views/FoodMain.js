import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import FavoriteFoods from './FavoriteFoods';
import {Form}  from 'react-bootstrap';
{/** So the above renders but this doesnt
  import {Form}  from 'react-bootstrap/Form';

  But this does work:
  import Form  from 'react-bootstrapForm';

  not sure why? 
*/}
import jsonData from '../assets/data/data.json'; 








class FoodMain extends React.Component {

 
  pathFinder = (event) => {
    const choosenPath = event.target.value;
    let pathGallery = jsonData;
    if(choosenPath){
      pathGallery = jsonData.filter((path) => {
        path.keyword === choosenPath;
      });
    }
    this.props.displayFilteredImages(pathGallery);
  };




  render(){
    return(
        <div>
          <Form>
            <Form.Group>
              <Form.Label>What World?</Form.Label>
              <Form.Control as="select"
              onChange={this.filter}> 
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
            {this.props.allFavoriteFoods.map((food, idx) => (
              <FavoriteFoods 
                key={idx}
                index={idx}
                src={food.image_url}
                title={food.title}
                description={food.description}
                displayAsModal={this.props.displayAsModal}
            />
               ))}
          </CardColumns>
        </div>
    )
  }
}

export default FoodMain;