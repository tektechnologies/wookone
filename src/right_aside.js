import React from 'react';

class RightAside extends React.Component {
render() {
  return (

    <div className="col-sm-2 well">
        <div className="thumbnail">
          <p>Upcoming Events:</p>
          <img src="paris.jpg" alt="Paris" width="400" height="300" />
          <p><strong>Paris</strong></p>
          <p>Fri. 27 November 2015</p>
          <button className="btn btn-primary">Info</button>
        </div>      
        <div className="well">
          <p>ADS</p>
        </div>
        <div className="well">
          <p>ADS</p>
        </div>
    </div>
     
  )
}
}

export default RightAside;