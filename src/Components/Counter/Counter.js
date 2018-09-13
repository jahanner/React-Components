import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  state = {
    value: 0
  };

  handleChange = event => {
    const { value } = event.target;
    if (value >= 0) {
      this.setState({ value });
    }
  };

  decrement = () => {
    if (this.state.value >= 1) {
      this.setState(state => ({ value: state.value - 1 }));
      console.log(this.state.value);
    }
  };

  increment = () => {
    this.setState(state => ({ value: state.value + 1 }));
    console.log(this.state.value);
  };

  render() {

    return (
      <div className="counter">
        <button onClick={this.decrement} className="testButton">
          -
        </button>
        <input className='input'
          type="number"
          onChange={this.handleChange}
          value={this.state.value}
          placeholder="0 yrs"
        />
        <button onClick={this.increment} className="testButton">
          +
        </button>
      </div>
    );
  }
}

export default Counter;
