import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './videoapp.css';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

 
class Ogarotodl extends Component {
    
    player = {}
    state = {
        video: {
            src: "https://play.prod.gcp.vix.services/nowhere-boy_pt/nowhere-boy_pt_1-1/play_v1_hls_540p.m3u8",
            crossorigin: "anonymous",
            

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
            <div>
                <Container>
            <Row>
              <Col>
                      <p><br /></p>
                      <div className='player'>
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster} 
                    crossorigin= "anonymous"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
                    
                </div>
                    <p><br /></p> </Col></Row>
               <div className="nave">
     
      <p><br /></p>

      <Link to="/"><Button variant="primary" size="lg" width="80%">
      Home
        </Button></Link>

<p><br /></p>

      </div>
      
  </Container>    
      
      </div>

      
            
        );
    }
}
export default Ogarotodl;