import React, { Component } from "react";
import { func, arrayOf, string } from "prop-types";

class BreadCrumbs extends Component {
  static propTypes = {
    steps: arrayOf(string).isRequired,
    stepChanged: func.isRequired
  };

  state = {
    currentIndex: 0,
    visitedIndex: 0
  };

  stepClicked = index => {
    const { currentIndex, visitedIndex } = this.state;
    if (index > visitedIndex + 1) return;
    this.setState({ currentIndex: index });
    const { steps, stepChanged } = this.props;
    stepChanged(steps[index]);
    if (index === visitedIndex + 1) {
      this.setState({ visitedIndex: visitedIndex + 1 });
    }
    console.log(
      "index: " + index,
      " visited: " + visitedIndex,
      " current: " + currentIndex
    );
  };

  render() {
    const { currentIndex, visitedIndex } = this.state;
    const { steps } = this.props;
    console.log(steps);
    return (
      <div className="crumbs">
        {steps.map((step, index) => {
          const cssClass =
            index === currentIndex
              ? "current-crumb"
              : index <= visitedIndex
                ? "large-crumb"
                : "small-crumb";
          const innerStyle =
            index === currentIndex ? { display: "inline-block" } : { display: "none" };
          return (
            <div
              className={cssClass}
              key={step}
              onClick={() => this.stepClicked(index)}
            >
              <div className="current-step" style={innerStyle}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BreadCrumbs;
