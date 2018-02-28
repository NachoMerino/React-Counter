import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    number: 0,
    visible: true,
  }
}


  increase = () => {
    let incr = this.state.number;
    incr = incr + 1;
    this.setState({
      number: incr,
    })
  }

  decrease = () => {
    let decr = this.state.number;
    decr = decr - 1;
    this.setState({
      number: decr,
    })
  }
  
  toggleCounter = () =>{
    let visible = this.state.visible;
    visible ? (visible=false) : (visible=true);
      this.setState({
        visible: visible,
      })
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Counter and Toggle</h1>
        </header>
        <div className="container">
          <div>
            <button onClick={this.increase}>Increase Counter</button>
            <button onClick={this.decrease}>Decrease Counter</button>
            <button onClick={this.toggleCounter}>Hide/Show Counter</button>
          </div>
          <div>
            <Counter num={this.state.number} toggle={this.state.visible}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
