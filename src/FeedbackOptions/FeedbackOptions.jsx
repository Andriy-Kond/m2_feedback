import React, { Component } from "react";

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const btnNames = Object.keys(options);

    return (
      <section>
        {btnNames.map(btnName => {
          return (
            <button key={btnName} name={btnName} onClick={onLeaveFeedback}>
              {btnName}
            </button>
          );
        })}
      </section>
    );
  }
}

export default FeedbackOptions;
