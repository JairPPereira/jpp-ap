import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';
import Button from 'react-bootstrap/Button';

 
class Globonews extends Component {
    player = {}
    state = {
        video: {
            src: "https://aipaipara.xyz/globo-news/tracks-v1a1/mono.m3u8?token=b5ceb14684d33cec958ef900cead666663b6ac43-e7f1bd685abb16d400e3bd3cb37763fe-1662752299-1662745099",

            poster: "https://ogimg.infoglobo.com.br/in/2939353-ac7-20b/FT1086A/Novamarca-da-Globo-News-que-muda-o-visual-no-dia-18-de-outubroDivulgacao.jpg"
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
                    <p><br /></p> 
                    <div className="nave">
      <nav>
      <center>
        <div class="btn-group" role="group" aria-label="Exemplo básico">
        <Link to="/globonews"><Button variant="primary" size="lg" width="80%">
          Opção 1
        </Button></Link>
 
  <Link to="/globonews2"><Button variant="primary" size="lg" width="80%">
          Opção 2
        </Button></Link>
</div></center>

      </nav></div>
      <div className="nave">
      <nav>
      <p><br /></p>
      <Link to="/">Home</Link>

<p><br /></p>

      </nav></div></div>
            
        );
    }
}
export default Globonews;