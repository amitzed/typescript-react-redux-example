import React, { Component, Fragment } from 'react';
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
        <h2>Class-Based Component</h2>
        {/* <h1>{this.props.color}</h1> */}
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <h1>{this.state.counter}</h1>
      </div>
    )
  }
};

const FuncApp = (props: AppProps): JSX.Element => {
  return (
    <div>
      <hr />
      <h2>Functional Component</h2>
      <h2>{props.color}</h2>
    </div>
  )
};

ReactDOM.render(
  <Fragment>
    <App color="red" />
    <FuncApp color="blue" />
  </Fragment>,
  document.getElementById('root')
)
