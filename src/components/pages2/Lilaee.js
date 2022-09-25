import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

 
class Lilaee extends Component {
    
    player = {}
    state = {
        video: {
            src: "https://cdnapisec.kaltura.com/p/513551/sp/51355100/playManifest/entryId/1_f28qkdpz/format/applehttp/protocol/https/flavorIds/1_770bzyx5,1_6x8ebjh5,1_74ssoqhv,1_ram59i2g,1_1dasc6j5,1_t0kr4bn6,1_925cs26s/preferredBitrate/1500/maxBitrate/10000/a.m3u8?timestamp=1664136063&id=2442&ip=167.249.209.236&override_expiration=1500&sign=ax3tOfLSWtSI%2FT6dPlI50x7%2B8Wqoq6Gk02kGkMQOvdY%3D&playSessionId=1313bca0-eac9-be38-abd6-eb35331d7d80:9be0af97-d67b-2938-fe80-70b2adbfcfce&referrer=aHR0cHM6Ly93d3cucnVudGltZS50di9wdC1ici9mZWF0dXJlL2xpbGEtYW5kLWV2ZQ==&clientTag=html5:v7.52",
            crossorigin: "anonymous",

            poster: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/73tu1VZq4e7TBjqANJhtWSCbz74.jpg"
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
export default Lilaee;