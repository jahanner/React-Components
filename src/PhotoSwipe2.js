import React, { Component } from "react";
import Slider from "react-slick";

class PhotoSwipe2 extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
        arrows: true
    };
    return (
      <Slider {...settings}>
        <div>
          <img
            className="img"
            src="http://farm8.staticflickr.com/7384/8730654121_05bca33388_z.jpg"
          />
        </div>
        <div>
          <img
            className="img"
            src="http://farm8.staticflickr.com/7347/8731666710_34d07e709e_z.jpg"
          />
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
            src="http://farm8.staticflickr.com/7347/8731666710_34d07e709e_z.jpg"
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
