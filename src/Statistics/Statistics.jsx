import React, { Component } from "react";

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <span>good: {good}</span> <br />
        <span>neutral: {neutral}</span> <br />
        <span>bad: {bad}</span>
        <br />
        <span>Total: {total}</span> <br />
        <span>Positive: {positivePercentage}</span>
      </>
    );
  }
}

export default Statistics;
