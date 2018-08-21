import React, { Component } from "react";
import Img from "react-image";
import { number, string } from "prop-types";

class ImageWithPopUp extends Component {
  static propTypes = {
    timeout: number,
    image: string
  };
  static defaultProps = {
    timeout: 3000,
    image:
      "https://thumbs.dreamstime.com/z/woman-customer-care-service-support-icon-vector-flat-color-pictogram-illustration-person-profile-human-avatar-call-97288367.jpg"
  };
  state = {
    shown: false
  };

  toggle = () => {
    if (this.token) {
      clearTimeout(this.token);
      this.token = null;
    }
    const { timeout } = this.props;
    console.log(this.state.shown);
    if (!this.state.shown && timeout) {
      this.token = setTimeout(() => this.toggle(), timeout);
    }
    this.setState(state => ({ shown: !state.shown }));
  };

  render() {
    const { image } = this.props;
    const textBubble = (
      <div className="speech-bubble">
        If you ever need help or additional info, just give me a tap!
      </div>
    );

    return (
      <div>
        <Img id="Popover1" onClick={this.toggle} src={image} />
        {this.state.shown && textBubble}
      </div>
    );
  }
}

export default ImageWithPopUp;
