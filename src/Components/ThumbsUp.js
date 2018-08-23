import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {bool} from 'prop-types';

class ThumbsUp extends Component {
  static propTypes = {
    liked: bool
  };
  state = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    return Object.keys(prevState).length === 0 ? {liked: nextProps.liked} : {};
  }

  audio = new Audio();

  toggleThumbsUp = () => {
    this.audio.src = 'http://soundbible.com/grab.php?id=1280&type=mp3';
    this.audio.play();
    this.setState({liked: this.state.liked ? undefined : true});
  };

  toggleThumbsDown = () => {
    this.audio.src = 'http://soundbible.com/grab.php?id=1294&type=mp3';
    this.audio.play();
    this.setState({liked: this.state.liked === false ? undefined : false});
  };

  render() {
    const {liked} = this.state;
    console.log('Like: ' + liked);
    const classes = 'fa fa-3x ';
    const downClasses =
      classes + (liked === false ? 'fa-thumbs-down' : 'fa-thumbs-o-down');
    const upClasses = classes + (liked ? 'fa-thumbs-up' : 'fa-thumbs-o-up');

    return (
      <div className="icons">
        <i className={downClasses} onClick={this.toggleThumbsDown} />
        <i className={upClasses} onClick={this.toggleThumbsUp} />
      </div>
    );
  }
}

export default ThumbsUp;
