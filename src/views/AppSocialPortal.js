import React from 'react';
import RightAside from './RightAside';
import MainWordFeed from './MainWordFeed';
import LeftAside from './LeftAside';
import { Container, Row } from 'react-bootstrap';


class AppSocialPortal extends React.Component {

  render(){
    return(
      <div id="app">
        <Container fluid>
          <Row>
            <LeftAside />
            <MainWordFeed />
            <RightAside />
          </Row>
        </Container>
      </div>  
    )
  }
}

export default AppSocialPortal;























