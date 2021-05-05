import React from 'react';

class LeftAside extends React.Component {
render() {
  return (


<div className="col-sm-3 well">
            <div className="well">
              <p><a href="index.html">My Profile</a></p>
              <img src="bird.jpg" className="img-circle" height="65" width="65" alt="Avatar" />
            </div>
            <div className="well">
              <p><a href="index.html">Interests</a></p>
              <p>
                <span className="label label-default">News</span>
                <span className="label label-primary">W3Schools</span>
                <span className="label label-success">Labels</span>
                <span className="label label-info">Football</span>
                <span className="label label-warning">Gaming</span>
                <span className="label label-danger">Friends</span> 
              </p>
            </div>
            <div className="alert alert-success fade in">
              <a href="index.html" className="close" data-dismiss="alert" aria-label="close">×</a>
              <p><strong>Ey!</strong></p>
              People are looking at your profile. Find out who.
            </div>
            <p><a href="index.html">Link</a></p>
            <p><a href="index.html">Link</a></p>
            <p><a href="index.html">Link</a></p>
          </div>

    )
}
}

export default LeftAside;