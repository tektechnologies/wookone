import React from 'react';
import '../assets/css/HomePage.css';



class HomePage extends React.Component {

  render(){
    return(
      <div>
      <div className="row">
      <div className="col-sm-12 content">
        <div className="panel panel-default text-left">
         <div className="panel-body">
             <p>Login or Register, or dont...IDC</p>
             <button type="button" className="btn btn-default btn-sm">
               <span className="glyphicon glyphicon-thumbs-up"></span> Word
             </button>
         </div>
        </div>
       </div>
     </div>  
      </div>
    );
  }
}

export default HomePage;