import React, { Component } from 'react';
import './HelloApp.css';
import App from './App';

class HelloApp extends Component {
  render() {
    return (
      <div className="f1 tc">
       <h2> hello app world</h2>
       <p>{this.props.greeting}</p>
       <App/>
      </div>
    );
  }
}

export default HelloApp;
