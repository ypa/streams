import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '306011753765-4h5o1utls7dlbf1dt22lq5u9lo5oh7m7.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        // Assigned to the component's instance for later access.
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am signed in!</div>;
    } else {
      return <div>I am not signed in</div>;
    }
  }

  render () {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
