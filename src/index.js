import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { isUserSignedIn, loadUserData, isSignInPending, handlePendingSignIn, redirectToSignIn } from 'blockstack'

if (isUserSignedIn()) {
  console.log("signed in")
  var profile = loadUserData().profile
  console.log(profile)
  ReactDOM.render(<App />, document.getElementById('root'))
} else if (isSignInPending()) {
  handlePendingSignIn().then(function(userData) {
    window.location = window.location.origin
  })
} else {
  redirectToSignIn()
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
