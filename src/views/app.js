import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomePage from './HomePage';
import Login from '../components/Login';
import Register from '../components/Register';
import {Switch, Route} from 'react-router-dom';
import LeftAside from './LeftAside';


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

                {/*     
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

                    <Route path="/HomePage">
                     <HomePage />
                    </Route>

                    <Route path="/LeftAside">
                     <LeftAside />
                    </Route>

                    <Route path="/RightAside">
                     <RightAside />
                    </Route>

                    <Route path="/MainWordFeed">
                     <MainWordFeed />
                    </Route>

                    <Route path="/Weather">
                     <Weather />
                    </Route>

                    <Route path="/YourMovies">
                     <YourMovies />
                    </Route>



*/}





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























