import React, { Component } from 'react';
import { Route } from 'react-router-dom';

const Click = () => <h1>Click here</h1>

class ResubF extends Component {
  render() {
    return (
        <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">ReSuB</h5>
              <p class="grey-text text-lighten-4">พื้นที่เล็ก ๆ สำหรับแบ่งปันประสบการณ์ จากรุ่นพี่สู่รุ่นน้อง เพราะเราคือครอบครัว PSU</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Contact us</h5>
              <ul>
                <li><Route path="/" component={Click} /></li>
                
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          <a class="grey-text text-lighten-4 right" href="#!">PSU</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default ResubF;
