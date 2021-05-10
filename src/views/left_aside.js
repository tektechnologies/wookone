import React from 'react';
import '../assets/css/LeftAside.css';

class LeftAside extends React.Component {
render() {
  return (


<div className="col-sm-3 well leftAsideMargin">
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
            <p><a href="index.html">Hike a Trail</a></p>
            <p><a href="index.html">Weather</a></p>
            <p><a href="index.html">Find Local Food</a></p>
            <p><a href="favoriteFood.html">Favorite Foods</a></p>
          </div>

    )
}
}

export default LeftAside;



