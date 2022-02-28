
// import React, {Component} from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
 
  return (
    <div className="App">
      <Header branding="Contact Manager" />
        <div className="container"> 
         <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-555" />
         <Contact name="Ash Doe" email="adoe@gmail.com" phone="222-222-222" />
        </div>
    </div> /*  App */
    
  );
}

 

export default App;
