import './App.css';
import { Component } from 'react';
import Message from './component/state_message';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message />
      </div>
    );
  }
}

export default App;
