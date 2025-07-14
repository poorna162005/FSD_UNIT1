import React, { Component } from 'react';
import Greetings from './components/greetings';
import Introduction from './components/introduction';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the App</h1>
        <p>This is the main application component.</p>
        <Greetings />
        <Introduction />
      </div>
    );
  }
}
