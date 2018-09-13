import React, { Component } from "react";
import SwipeableViews from "react-swipeable-views";
import './PhotoSwipe.css';

class Test1 extends Component {
  render() {
    return (
      <div>
        <img
          className="img"
          src="http://farm8.staticflickr.com/7382/8732044638_9337082fc6_z.jpg"
        />
        Just testing
      </div>
    );
  }
}

class Test2 extends Component {
  render() {
    return (
      <div>
        <img
          className="img"
          src="http://farm8.staticflickr.com/7384/8730654121_05bca33388_z.jpg"
        />
        Just testing
      </div>
    );
  }
}
class Test3 extends Component {
  render() {
    return (
      <div>
        <img
          className="img"
          src="http://farm8.staticflickr.com/7347/8731666710_34d07e709e_z.jpg"
        />
        Just testing
      </div>
    );
  }
}

class PhotoSwipe extends Component {
  render() {
    return (
      <SwipeableViews enableMouseEvents={true}>
        <div>
          <Test1 />
        </div>
        <div>
          <Test2 />
        </div>
        <div>
          <Test3 />
        </div>
      </SwipeableViews>
    );
  }
}

export default PhotoSwipe;
