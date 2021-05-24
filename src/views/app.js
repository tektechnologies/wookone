import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import HomePage from './homePage';
import Login from '../components/login';
import Register from '../components/register';
import {Switch, Route} from 'react-router-dom';


class App extends React.Component {

  render(){
    return(
      <div id="app">
        <Header />
        <div className="container text-center">  

        <div className="row">

               <main>
                  <Switch>
                    <Route path="/" exact>
                      <HomePage /> 
                    </Route>

                    <Route path="/login">
                      <Login />
                    </Route>

                    <Route path="register">
                      <Register />
                      </Route>
                  </Switch>
              </main>

            </div>
           </div>
         <Footer />
      </div>  
    )
  }
}

export default App;























