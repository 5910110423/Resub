import React, { Component } from 'react';
import './App.css';
import ResubH from './components/ResubH';
import ResebF from './components/ResubF';
import ResubC from './components/ResubC';
import HomeResub from './components/HomeResub';
import ContactUs from './components/ContactUs';



/*class App extends Component {
  render(){
    return(
     <body>
        <ResubH/>
      <div>
          <ResubC/>
      </div>
        <ResebF/>
     </body>
     
    );
  }*/

  class App extends Component {
    render(){
      return(
            <ContactUs/>
      );
    }

    /*class App extends Component {
    render(){
      return(
            <HomeResub/>
      );
    }*/

}
export default App;
