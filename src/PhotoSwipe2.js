import React, { Component } from "react";
import Slider from "react-slick";

class Test1 extends Component {
    render() {
        return (
            <div>
                <img
                    className="img"
                    src="http://farm8.staticflickr.com/7384/8730654121_05bca33388_z.jpg"
                />
            </div>
        );
    }
}

class PhotoSwipe2 extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true
    };
    return (
      <Slider {...settings}>
        <div>
          <Test1/>
        </div>
        <div>
          <img
            className="img"
            src="http://farm8.staticflickr.com/7382/8732044638_9337082fc6_z.jpg"
          />
        </div>
        <div>
          <img
            className="img"
            src="http://farm8.staticflickr.com/7384/8730654121_05bca33388_z.jpg"
          />
        </div>
        <div>
          <img
            className="img"
            src="http://farm8.staticflickr.com/7382/8732044638_9337082fc6_z.jpg"
          />
        </div>
      </Slider>
    );
  }
}

export default PhotoSwipe2;
