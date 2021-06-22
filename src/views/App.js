import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomePage from './HomePage';
import Login from '../components/Login';
import Register from '../components/Register';
import AppSocialPortal from './AppSocialPortal';
import FavoriteImageMain from './FavoriteImageMain';
import FavoriteImages from './FavoriteImages';
import HikeATrail from './HikeATrail';
import Weather from './Weather';
import YelpFood from './YelpFood';
import YourMovies from './YourMovies';
import {Switch, Route} from 'react-router-dom';



class App extends React.Component {

  render(){
    return(
      <div id="app">
        <Header />
       

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

                    <Route path="/FavoriteImageMain">
                     <FavoriteImageMain />
                    </Route>

                    <Route path="/FavoriteImages">
                    <FavoriteImages />
                   </Route>

                    <Route path="/HikeATrail">
                     <HikeATrail />
                    </Route>

                    <Route path="/Weather">
                     <Weather />
                    </Route>

                    <Route path="/YelpFood">
                     <YelpFood />
                    </Route>

                    <Route path="/YourMovies">
                     <YourMovies />
                    </Route>

                    

                  </Switch>
              </main>
         <Footer />
      </div>  
    )
  }
}

export default App;























