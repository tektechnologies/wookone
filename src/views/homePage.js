import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import '../assets/css/HomePage.css';



class HomePage extends React.Component {

  render(){
    return(
      <div id="app">
        <Header />
          <div className="container text-center">    
            <div className="row content">
             <div className="col-sm-12">
              <div className="panel panel-default text-left">
                          <div className="panel-body ">

                              <h1>Welcome to the Home Page, Login or Register... or dont... IDC.</h1>
                                    <button type="button" className="btn btn-default btn-sm">
                                        <span className="glyphicon glyphicon-thumbs-up"></span> Cool
                                      </button>     
                            </div>
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>  
    )
  }
}

export default HomePage;












