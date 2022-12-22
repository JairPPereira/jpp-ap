import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

 
class Flashdance extends Component {
    
    player = {}
    state = {
        video: {
            src: "https://video.wixstatic.com/video/e16db6_18b1461f2562406aab9b5718d1c3522d/720p/mp4/file.mp4",
            crossorigin: "anonymous",

            poster: "https://www.themoviedb.org/t/p/original/n1ViZcc6W2ksIgxZjjlQP8Tw10R.jpg"
        }
    }
 
    onPlayerReady(player){
        console.log("Player is ready: ", player);
        this.player = player;
    }
 
    onVideoPlay(duration){
        console.log("Video played at: ", duration);
    }
 
    onVideoPause(duration){
        console.log("Video paused at: ", duration);
    }
 
    onVideoTimeUpdate(duration){
        console.log("Time updated: ", duration);
    }
 
    onVideoSeeking(duration){
        console.log("Video seeking: ", duration);
    }
 
    onVideoSeeked(from, to){
        console.log(`Video seeked from ${from} to ${to}`);
    }
 
    onVideoEnd(){
        console.log("Video ended");
    }
 
    render() {
        return (
            <div><Container fluid>
            <Row>
              <Col>
                      <p><br /></p>
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster} 
                    width="720px" 
                    height="auto"
                    crossorigin= "anonymous"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
                    <p><br /></p> </Col></Row></Container>
               <div className="nave">
     
      <p><br /></p>

      <Link to="/"><Button variant="primary" size="lg" width="80%">
      Home
        </Button></Link>

<p><br /></p>

      </div>
      
      
      
      </div>

      
            
        );
    }
}
export default Flashdance;