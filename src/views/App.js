import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomePage from './HomePage';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashbored from '../components/Dashbored';
import AppSocialPortal from './AppSocialPortal';
import FavoriteImageMain from './FavoriteImageMain';
import FavoriteImages from './FavoriteImages';
import HikeATrail from './HikeATrail';
import Weather from './Weather';
import LocalArt from './LocalArt';
import SkateShop from './SkateShop';
import FarmersMarket from './FarmersMarket';
import LocalFood from './LocalFood';

import CityExplorer from './CityExplorer/CityExplorerMain';
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

              <Route path="/Dashbored">
                <Dashbored />
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
              <Route path="/LocalArt">
                <LocalArt />
              </Route>
              <Route path="/SkateShop">
                <SkateShop />
              </Route>
              <Route path="/FarmersMarket">
                <FarmersMarket />
              </Route>
              <Route path="/LocalFood">
                <LocalFood />
              </Route>

             


              <Route path="/CityExplorer/CityExplorerMain">
                <CityExplorer />
              </Route>
            </Switch>
          </main>
         <Footer />
      </div>  
    )
  }
}
export default App;























