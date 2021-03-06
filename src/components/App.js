import React, { Component } from 'react'
import Profile from './Profile'
import Signin from './Signin'
import {
  isSignInPending,
  isUserSignedIn,
  redirectToSignIn,
  handlePendingSignIn,
  signUserOut,
} from 'blockstack'

export default class App extends Component {
  handleSignIn(e) {
    e.preventDefault()
    redirectToSignIn(origin, origin + '/manifest.json', ['store_write', 'publish_data'])
  }

  handleSignOut(e) {
    e.preventDefault()
    signUserOut(window.location.origin)
  }

  render() {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          { !isUserSignedIn() ?
            <Signin handleSignIn={ this.handleSignIn } />
            : <Profile handleSignOut={ this.handleSignOut } />
          }
        </div>
      </div>
    )
  }

  componentWillMount() {
    if (isSignInPending()) {
      handlePendingSignIn().then((userData) => {
        window.location = window.location.origin
      })
    }
  }
}
