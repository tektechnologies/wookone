import React from 'react';
import '../assets/css/LeftAside.css';
import { NavLink } from 'react-router-dom';
import {Col} from 'bootstrap';



class LeftAside extends React.Component {
render() {
  return (


<Col className="well leftAsideMargin">
            <div className="well">
              <p><a href="index.html">My Profile</a></p>
              <img src="bird.jpg" className="img-circle" height="65" width="65" alt="Avatar" />
            </div>
            <div className="well">
              <p><a href="index.html">Interests</a></p>
              <p>
                <span className="label label-default">Weather</span>
                <span className="label label-primary">Music</span>
                <span className="label label-success">Farmers Markets</span>
                <span className="label label-info">Hiking</span>
                <span className="label label-primary">Weather</span>
                <span className="label label-success">Friends</span> 
              </p>
            </div>
            <div className="alert alert-success fade in">
              <a href="index.html" className="close" data-dismiss="alert" aria-label="close">×</a>
              <p><strong>Yeew!</strong></p>
              People are looking at your profile. Find out who.
            </div>
            <p><NavLink to="/HikeATrail">Hike a Trail</NavLink></p>
            <p><NavLink to="/Weather">Weather</NavLink></p>
            <p><NavLink to="/YourMovies">Your Movies</NavLink></p>
            <p><NavLink to="/FavoriteFoodMain">Favorite Foods</NavLink></p>
            <p><NavLink to="/YelpFood">Find Local Food</NavLink></p>
 </Col>

    )
}
}

export default LeftAside;



