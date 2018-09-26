import React, { Component } from 'react';
import ResubH from './ResubH';
import ResebF from './ResubF';
import cover from './img/cover.jpg'

class HomeResub extends Component {
    render(){
      return(
        <body>
            <ResubH/>
            <div>
                <img src={cover}></img>
            </div>
            <ResebF/>
        </body>
      )};
}
export default HomeResub;