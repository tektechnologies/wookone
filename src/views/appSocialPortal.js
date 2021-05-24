import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import RightAside from './right_aside';
import MainWordFeed from './mainWordFeed';
import LeftAside from './left_aside';
import MainWordFeed from './mainWordFeed';


class App extends React.Component {

  render(){
    return(
      <div id="app">
        <Header />
        <div className="container text-center">    
        <div className="row">
            <LeftAside />
            <MainWordFeed />
            <RightAside />
        </div>
        </div>
        <Footer />
      </div>  
    )
  }
}

export default App;























