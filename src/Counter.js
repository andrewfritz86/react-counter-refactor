import React, { Component } from 'react';

const incrementState = (state) => {
  return { count: state.count + 1 };
};

const decrementState = (state) => {
  return { count: state.count - 1 };
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.updateDocTitle = this.updateDocTitle.bind(this);
  }

  updateDocTitle() {
    document.title = this.state.count;
  }

  increment() {
    this.setState(incrementState, () => {
      this.updateDocTitle();
    });
  }
  decrement() {
    this.setState(decrementState, () => {
      this.updateDocTitle();
    });
  }
  reset() {
    this.setState(
      (state) => {
        return { count: 0 };
      },
      () => {
        this.updateDocTitle();
      },
    );
  }

  render() {
    return (
      <div className="Counter">
        <p className="count">{this.state.count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
