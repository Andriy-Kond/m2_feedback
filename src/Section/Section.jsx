import React, { Children, Component } from "react";

class Section extends Component {
  render() {
    return (
      <section>
        <p>{this.props.title}</p>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
