import React, { Component } from 'react';
import hiking from './img/hiking.png';


class ResubC extends Component {
  render() {
    return (
      <div class="main">
        <div class="row">
        <div class = "col s1"></div>
            <div class = "App col s10">
                <img src={hiking} />
            </div>
         <div class = "col s1"></div>
        </div>
      </div>
    );
  }
}

export default ResubC;
