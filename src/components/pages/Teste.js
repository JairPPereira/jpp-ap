import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

 
class Teste extends Component {
    
    player = {}
    state = {
        video: {
            src: "https://live-lib-pa-01.video.globo.com/j/eyJhbGciOiJSUzUxMiIsImtpZCI6IjEiLCJ0eXAiOiJKV1QifQ.eyJjb3VudHJ5X2NvZGUiOiJCUiIsImRvbWFpbiI6ImxpdmUtbGliLXBhLTAxLnZpZGVvLmdsb2JvLmNvbSIsImV4cCI6MTY3NDU3MDUwNCwiaWF0IjoxNjc0NDg0MTA0LCJpc3MiOiJwbGF5YmFjay1hcGktcHJvZC1nY3AiLCJvd25lciI6Ijg2YjVjNjA1LTI5YmQtNDllZS05NGZkLTM4MTU3OTAyZGZhNyIsInBhdGgiOiIvZC9jLzJ4L3MvaGxzLWdsb2JvLWJlbC9wbGF5bGlzdC5tM3U4In0.lhnVQeCRM3ZMTgLwHY-9VFjJcEXDieP9yJtQVsWO4Td9Mi3OAXVWi2WVk3RI1wglcmTHg8gYaiGwGDNLDIDKFSoLNeMmQNehc8qtgwQBfYAQLr9nH2D5ENVQyhGYa2E1ESlHSKUoANu1P2a_xxq7hrErhKU7qTn-zmPMoPmPqQ2YG53dnQyBKtIpE-FMu52oVirna13i5d_pQaStgQ5vnFJdTy56IRfXIUsyXtTkuimkIqNMcX5II4y7DFawtmQDazGIrwFlfb6KvG9xle-qqkxZ6DEce7p9kMJtRUdg2nK119Fju_gARcMrxurzHPsEGc-M2PH3aiJlhnrsl0fHAQ/d/c/2x/s/hls-globo-bel/hls-globo-bel_655/playlist.m3u8",
            crossorigin: "anonymous",

            poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b8/Logotipo_da_Rede_Liberal.png/200px-Logotipo_da_Rede_Liberal.png"
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
export default Teste;