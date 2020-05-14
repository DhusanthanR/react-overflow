import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './app/app';
import './style.css';

class Index extends Component {

  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
