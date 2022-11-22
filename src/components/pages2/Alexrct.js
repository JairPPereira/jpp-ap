import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

 
class Alexrct extends Component {
    
    player = {}
    state = {
        video: {
            src: "https://cdnapisec.kaltura.com/p/513551/sp/51355100/playManifest/entryId/1_l0l43jmj/format/applehttp/protocol/https/flavorIds/1_ev8phc8a,1_ppdsbhbx,1_1emuw8fo,1_z612vcce,1_dzkbr4t2,1_ymrh7ahi,1_ynx2svlf/preferredBitrate/1500/maxBitrate/10000/a.m3u8?timestamp=1669077556&id=6745&ip=167.249.209.241&override_expiration=1500&sign=x9Ca%2F5xAarPg7uT5aWRYQzPe2TfXRn2U3D6%2FGv%2F8evQ%3D&playSessionId=7248dd41-7e86-d136-2625-fd94846abe07:e68840cd-f343-1a6c-a167-79641940cfc4&referrer=aHR0cHM6Ly93d3cucnVudGltZS50di9wdC1ici9mZWF0dXJlL2FsZXgtcmlkZXI=&clientTag=html5:v7.55",
            crossorigin: "anonymous",

            poster: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/dNgzCLSy1jhEar6mQalnIgCH8Hv.jpg"
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
export default Alexrct;