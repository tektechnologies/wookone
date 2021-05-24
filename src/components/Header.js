import React from 'react';
import '../assets/css/Header.css';
import { NavLink } from 'react-router-dom';


class Header extends React.Component {

  render() {
    return(
      <header> 
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
             <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>                        
                </button>
                 <a className="navbar-brand" href="index.html">Logo</a>

              </div>
           <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">

             
              {/*<li className="active"> <a href="index.html">Home</a> </li>*/}
              <li><NavLink to="/" exact>Home</NavLink></li>
              
              {/* <li> <a href="index.html">Messages</a> </li>*/}
              <li><NavLink to="/" exact>Messages</NavLink></li>
              
            </ul>
            <form className="navbar-form navbar-right" role="search">
              <div className="form-group input-group">
                <input type="text" className="form-control" placeholder="Search.." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <span className="glyphicon glyphicon-search"></span>
                  </button>
                </span>        
              </div>
            </form>
      <ul className="nav navbar-nav navbar-right">
        <li>

        <NavLink to="/Login" exact>
           <span className="glyphicon glyphicon-user"></span>
             My Account
        </NavLink>
      
        </li>
      </ul>
    </div>
  </div>
</nav>

      </header>
    )
  }
}

export default Header;