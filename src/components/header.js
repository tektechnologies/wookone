import React from 'react';
import './css/Header.css';

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
              <li className="active"><a href="index.html">Home</a></li>
              <li><a href="index.html">Messages</a></li>
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
        <li><a href="index.html"><span className="glyphicon glyphicon-user"></span> My Account</a></li>
      </ul>
    </div>
  </div>
</nav>

      </header>
    )
  }
}

export default Header;