import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

 
class Plutoromance extends Component {
    
    player = {}
    state = {
        video: {
            src: "https://service-stitcher-ipv4.clusters.pluto.tv/stitch/hls/channel/5f171f988ab9780007fa95ea/master.m3u8?advertisingId=&appName=web&appVersion=unknown&architecture=&buildVersion=&clientTime=&deviceDNT=0&deviceId=c5eac813887544b7a80540b014ca5482&deviceLat=-1.3247&deviceLon=-48.2925&deviceMake=Chrome&deviceModel=Chrome&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&marketingRegion=BR&sid=cbca92a34d0a11edb4edd6faf2e157da&userId=",
            crossorigin: "anonymous",

            poster: "https://images.pluto.tv/channels/5f171f988ab9780007fa95ea/featuredImage.jpg?auto=&ixlib=react-9.1.5&w=224&h=124&dpr=1&q=75"
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
export default Plutoromance;