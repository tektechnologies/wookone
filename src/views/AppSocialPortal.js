import React from 'react';
import RightAside from './Right_aside';
import MainWordFeed from './MainWordFeed';
import LeftAside from './Left_aside';
import MainWordFeed from './MainWordFeed';


class AppSocialPortal extends React.Component {

  render(){
    return(
      <div id="app">
        <div className="container text-center">    
        <div className="row">
            <LeftAside />
            <MainWordFeed />
            <RightAside />
        </div>
        </div>
      </div>  
    )
  }
}

export default AppSocialPortal;























