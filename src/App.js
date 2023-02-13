import React, { Component } from 'react';
import Lottery from './Lottery';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 4 };
  }
  render() {
    return (
      <div className='App'>
        <Lottery/>
        <Lottery title='Mini' numBalls={4} maxNum={10}/>
      </div>
    );
  }
}

export default App;
