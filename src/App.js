import React, { Component } from 'react';
import './App.css';
import ResubH from './components/ResubH';
import ResebF from './components/ResubF';
import ResubC from './components/ResubC';


class App extends Component {
  render(){
    return(
      <body>
        <ResubH/>
      <div class="container">
          <ResubC/>
      </div>
      <ResebF/>
    </body>
    );
  }

}
export default App;
