import './App.css';

import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './views/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import Dashbored from './components/Dashbored';
import AppSocialPortal from './views/AppSocialPortal';
import HikeATrail from './views/HikeATrail';
import Weather from './views/Weather';
import {Routes, Route} from 'react-router-dom';



class App extends React.Component {

  render(){
    return(
      <div id="app">
        <Header />
          <main>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={ <Login />}/>
            <Route path="/Register" element={ <Register />}/>
            <Route path="/Dashbored" element={ <Dashbored />}/>
            <Route path="/AppSocialPortal" element={ <AppSocialPortal />}/>
            <Route path="/HikeATrail"  element={ <HikeATrail /> } />
            <Route path="/Weather"  element={ <Weather /> } />
            </Routes>
          </main>
         <Footer />
      </div>  
    )
  }
}
export default App;
























