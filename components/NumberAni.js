import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default class NumberAni extends Component {
  constructor(props) {
    super();
    this.state = {
      startCounter: false,
    };
  }
  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  };
  render() {
    return (
      <div className="about-two__count">
        <div className="about-two__count-text">
          <p>{this.props.name}</p>
          <span className="counter">
            <VisibilitySensor
              onChange={this.onVisibilityChange}
              offset={{ top: 10 }}
              delayedCall
            >
              <CountUp end={this.state.startCounter ? this.props.num : 0} />
            </VisibilitySensor>
          </span>
        </div>
      </div>
    );
  }
}
