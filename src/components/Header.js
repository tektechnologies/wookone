import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import React from 'react';
import '../assets/css/Header.css';
import DreadLogo from '../assets/Images/wooklogo.jpeg'; 


class Header extends React.Component {

  render() {
    return(
      <Navbar className="bg-navbar" expand="lg">
         <Navbar.Brand href="/"> 
           <img src={DreadLogo} alt="Wook Logo" height="60px" />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="navbarAnchor" href="/">Home</Nav.Link>
                <Nav.Link className="navbarAnchor" href="/AppSocialPortal">Wookin</Nav.Link>
              </Nav>
            
            <ul className="nav navbar-nav navbar-right">
              <li><Nav.Link href="/Login">Login</Nav.Link></li>
              <li><Nav.Link href="/Register" > Register</Nav.Link></li>
            </ul>

            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button className="bg-custom-button" variant="outline-success">Search</Button>
            </Form>

          </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;