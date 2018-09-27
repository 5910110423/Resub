import React, { Component } from 'react';
import logo from './img/logo.png';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDc7ECj3a1yaw1ux6DrXAtaOe-JKUwJN6E",
  authDomain: "resub-ad75e.firebaseapp.com",
  databaseURL: "https://resub-ad75e.firebaseio.com",
  projectId: "resub-ad75e",
  storageBucket: "resub-ad75e.appspot.com",
  messagingSenderId: "208512153358"
};
firebase.initializeApp(config);

const auth = firebase.auth
const provider = new firebase.auth.FacebookAuthProvider();



class ResubH extends Component {
    constructor(props){
        super(props);
        this.state = {user:null}
      } 
      login = () => {
        var that = this;
        const result = auth().signInWithPopup(provider).then(function(result) {
          var user = result.user;
          console.log(user);
          that.setState({user: user});
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
      }
      logout = () => {
        var that = this;
        auth().signOut().then(function() {
          that.setState({user: null});
        }).catch(function(error) {
        });
      }
      renderName = () => {
        const {user} = this.state
        if(user)
          return (<div>{/*<img src={`${user.photoURL}` />*/}{user ? `คุณกำลังเข้าใช้งานด้วยบัญชี ${user.displayName}` : 'Hi!'}</div>)
      }


  render() {
    return (
        <nav>
            <div class="row">
                <div class="col s1">
                    {/*<img height="40px" src = {logo}/>*/}
                </div>
                <div class="col s2"><a class="grey-text text-lighten-3" href="/homeResub">RESUB</a></div>
                <div class="col s5">{this.renderName()}</div>
                <div class="col s2">
                     <button class="btn" onClick={this.login}>
                         Login with Facebook
                     </button></div>
                <div class="col s1">
                    <button class="btn" onClick={this.logout}>
                        Logout
                    </button></div>
                <div class="col s1"></div>
            </div>
        </nav>
    );
  }
}

export default ResubH;
