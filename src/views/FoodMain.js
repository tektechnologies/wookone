import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import FavoriteFoods from './FavoriteFoods';
import { Form } from 'react-bootstrap';

class FoodMain extends React.Component {

  render(){
    return(
        <div>
          <Form>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control> 
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
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