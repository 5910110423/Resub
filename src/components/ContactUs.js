import React, { Component } from 'react';
import ResubH from './ResubH';
import ResebF from './ResubF';
import user from './img/user.png';



class ContactUs extends Component {
  render(){
    return(
    <body>
        
        <div>
            <div class="row teal lighten-3 z-depth-3">
                <div class="col s2"></div>
                <div class="col s10"><h1>TEAM</h1></div>
            </div>

            <div class="main">
            
            {/*รูปกับชื่อไอซ์*/}
                <div class="row container">
                    <div class="col s4"><img height="120px" src={user}></img></div>
                    <div class="col s8">
                        <p>นางสาวศิริลักษณ์ ประจงไสย</p>
                        <p>5910110326</p>
                    </div>
                </div>
            {/*รูปกับชื่ออมานี*/}
                <div class="row container">
                    <div class="col s4"><img height="120px" src={user}></img></div>
                    <div class="col s8">
                        <p>นางสาวอมานี ดามาอู</p>
                        <p>5910110385</p>
                    </div>
                </div>
            
            {/*รูปกับชื่อนิค*/}
                <div class="row container">
                    <div class="col s4"><img height="120px" src={user}></img></div>
                    <div class="col s8">
                        <p>นายเมธาสิทธิ์ บุญยิ่ง</p>
                        <p>5910110423</p>
                    </div>
                </div>
            
            </div>
        </div>    
    </body>
    );
  }

}
export default ContactUs;