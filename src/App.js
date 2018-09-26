import React, { Component } from 'react';
import './App.css';
import ResubH from './components/ResubH';
import ResebF from './components/ResubF';
import ResubC from './components/ResubC';
import { Route } from 'react-router-dom';


class App extends Component {
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
  }

}
export default App;
