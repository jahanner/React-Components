import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Thumbs extends Component {
  state = {
    thumbsDown: 'o-down',
    thumbsUp: 'o-up',
    liked: false,
    disliked: false
  };

  // myAudio = document.getElementById("myAudio");
  // Play() {
  //   this.myAudio.play();
  // }

  toggleThumbsUp = () => {
    if (this.state.thumbsUp === 'o-up') {
      this.setState(() => ({thumbsUp: 'up'}));
      this.setState(() => ({thumbsDown: 'o-down'}));
      this.setState(() => ({liked: true}));
      this.setState(() => ({disliked: false}));

      // const context = new AudioContext();
      // console.log(context);
      const audio = new Audio();
      audio.src = 'http://soundbible.com/grab.php?id=1280&type=mp3';
      audio.load();
      // console.log(audio.canPlayType("audio/mpeg"));
      // console.log(JSON.stringify(audio));
      // console.log(typeof audio);
      // console.log(audio);
      audio.play();
    } else {
      this.setState(() => ({thumbsUp: 'o-up'}));
      this.setState(state => ({liked: !state.liked}));
    }
  };

  toggleThumbsDown = () => {
    if (this.state.thumbsDown === 'o-down') {
      this.setState(() => ({thumbsDown: 'down'}));
      this.setState(() => ({thumbsUp: 'o-up'}));
      this.setState(() => ({disliked: true}));
      this.setState(() => ({liked: false}));
      const audio = new Audio();
      audio.src = 'http://soundbible.com/grab.php?id=1294&type=mp3';
      audio.play();
    } else {
      this.setState(() => ({thumbsDown: 'o-down'}));
      this.setState(state => ({disliked: !state.disliked}));
    }
  };

  render() {
    console.log('Like: ' + this.state.liked);
    console.log('Dislike: ' + this.state.disliked);
    return (
      <div className="icons">
        <i
          className={`fa fa-thumbs-` + `${this.state.thumbsDown}` + ` fa-3x`}
          onClick={this.toggleThumbsDown}
        />
        <i
          className={`fa fa-thumbs-` + `${this.state.thumbsUp}` + ` fa-3x`}
          onClick={this.toggleThumbsUp}
        />
      </div>
    );
  }
}

export default Thumbs;
