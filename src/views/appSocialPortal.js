import React from 'react';
import RightAside from './RightAside';
import MainWordFeed from './MainWordFeed';
import LeftAside from './LeftAside';


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























