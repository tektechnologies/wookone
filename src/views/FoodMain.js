import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import FavoriteFoods from './FavoriteFoods';
import { Form } from 'react-bootstrap/Form';


class FoodMain extends React.Component {

 





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
                <option value="1">Food</option>
                <option value="2">Trail</option>
                <option value="3">Nature</option>
                <option value="4">Technology</option>
                <option value="5">Ocean</option>
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