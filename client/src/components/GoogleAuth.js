import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '306011753765-4h5o1utls7dlbf1dt22lq5u9lo5oh7m7.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render () {
    return <div>GoogleAuth</div>
  }
}

export default GoogleAuth;
