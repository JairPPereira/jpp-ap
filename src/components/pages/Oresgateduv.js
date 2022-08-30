import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

 
class Oresgateduv extends Component {
    
    player = {}
    state = {
        video: {
            src: "https://cdnapisec.kaltura.com/p/513551/sp/51355100/playManifest/entryId/1_3bmt5z9h/format/applehttp/protocol/https/flavorIds/1_up32bdnz,1_bdi2mxe8,1_iksr3cun,1_ibj9rufc,1_usqiyd80,1_ikmmlcor/preferredBitrate/1500/maxBitrate/10000/a.m3u8?timestamp=1661900942&id=3073&ip=206.84.34.27&override_expiration=1500&sign=GMKMmHJI0Q7b13l3deX2L0SpnFd54%2Ffy4e9G%2FupeXqs%3D&playSessionId=5375bf11-359a-563b-45a0-c4ea1882d1ea:b13764d7-fe16-903b-4fe7-a4125a133ef1&referrer=aHR0cHM6Ly93d3cucnVudGltZS50di9wdC1ici9mZWF0dXJlL28tcmVzZ2F0ZS1kZS11bWEtdmlkYQ==&clientTag=html5:v7.50",

            poster: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/psRdjCkLvSnp3Go3L0yFKjEYWIS.jpg"
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

      </div></div>
            
        );
    }
}
export default Oresgateduv;