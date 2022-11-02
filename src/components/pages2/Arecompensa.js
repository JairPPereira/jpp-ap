import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

 
class Arecompensa extends Component {
    
    player = {}
    state = {
        video: {
            src: "https://cdnapisec.kaltura.com/p/513551/sp/51355100/playManifest/entryId/1_25rrfxqy/format/applehttp/protocol/https/flavorIds/1_zdle1ses,1_t2mwavgx,1_dkjnw7na,1_yucx9g09,1_0nwqbpfk,1_t99z4u9b,1_mypu91ke/preferredBitrate/1500/maxBitrate/10000/a.m3u8?timestamp=1667421303&id=3340&ip=167.249.209.179&override_expiration=1500&sign=PRWKYh99G8G4%2FLhXlTBy5ADTynU2Pfiw051WeaaULXc%3D&playSessionId=78678a3f-c278-fdfd-3065-522321b37720:11918c64-23a8-7eea-7c44-d6959a9952ad&referrer=aHR0cHM6Ly93d3cucnVudGltZS50di9wdC1ici9mZWF0dXJlL3JlY29tcGVuc2E=&clientTag=html5:v7.54",
            crossorigin: "anonymous",

            poster: "https://www.themoviedb.org/t/p/w500_and_h282_face/kBenhxySFb2NhRJjCVLRCiTqYPr.jpg"
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
export default Arecompensa;