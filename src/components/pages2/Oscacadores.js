import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

 
class Oscacadores extends Component {
    
    player = {}
    state = {
        video: {
            src: "https://cdnapisec.kaltura.com/p/513551/sp/51355100/playManifest/entryId/1_wyvjuv8c/format/applehttp/protocol/https/flavorIds/1_1cpgfde7,1_rkh0uvpm,1_3ksn6cp1,1_4ezq2irq,1_lvw7z3pu,1_5e3p63iu,1_j3us0aeq/preferredBitrate/1500/maxBitrate/10000/a.m3u8?timestamp=1669077817&id=2409&ip=167.249.209.241&override_expiration=1500&sign=Yo3AO%2BFvZhvBkK7IrVyfHPTAuWFYn56A4yWgURg4FzI%3D&playSessionId=e2f46b05-7a2a-b7f6-1da2-3585172126a5:4178b5b5-12fa-84af-d694-014793a28f8b&referrer=aHR0cHM6Ly93d3cucnVudGltZS50di9wdC1ici9mZWF0dXJlL29zLWNhY2Fkb3Jlcw==&clientTag=html5:v7.55",
            crossorigin: "anonymous",

            poster: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/6jR6IZkX7USdRsAzoq7BTqKFgqP.jpg"
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
export default Oscacadores;