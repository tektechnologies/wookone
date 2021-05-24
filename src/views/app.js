import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import HomePage from './HomePage';
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

                    <Route path="/Login">
                      <Login />
                    </Route>

                    <Route path="/Register">
                      <Register />
                    </Route>

                    <Route path="/AppSocialPortal">
                      <AppSocialPortal />
                    </Route>

                    <Route path="/FavoriteFood_Main">
                     <FavoriteFood_Main />
                    </Route>

                    <Route path="/HikeATrail">
                     <HikeATrail />
                    </Route>

                    <Route path="/hikeATrail">
                     <HikeATrail />
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























