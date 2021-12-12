import React from 'react';
import RightAside from './RightAside';
import MainWordFeed from './MainWordFeed';
import LeftAside from './LeftAside';
import { Container, Row, Col } from 'react-bootstrap';


class AppSocialPortal extends React.Component {

  render(){
    return(
      <div id="app">
      
            
              <LeftAside />
            
           
              <MainWordFeed />
            
            
              <RightAside />
            
      
      </div>  
    )
  }
}
export default AppSocialPortal;























