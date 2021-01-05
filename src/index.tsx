import React, { Component } from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string; // Question mark in key indicates that the color prop in <App /> is optional and not required;
}

class App extends Component<AppProps> {
  state = {
    counter: 0
  }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 })
  }

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1})
  }

  render() {
    return (
      <div>
        {/* <h1>{this.props.color}</h1> */}
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <h1>{this.state.counter}</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App color="red" />,
  document.getElementById('root')
)
