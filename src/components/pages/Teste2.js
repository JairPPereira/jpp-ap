import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';
import Button from 'react-bootstrap/Button';

 
class Teste2 extends Component {
    player = {}
    state = {
        video: {
            src: "https://vod.provider.plex.tv/library/parts/6306864742112-dash.mpd?X-Plex-Session-Identifier=vn7jkgredweao1x7pzx6izd8&X-Plex-Product=Plex%20Web&X-Plex-Version=4.89.1&X-Plex-Client-Identifier=d0yzzrm42oucmj03766m2cfs&X-Plex-Platform=Chrome&X-Plex-Platform-Version=104.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=hosted&X-Plex-Device=Android&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=980x1780%2C320x712&X-Plex-Token=EKXrK4UGPTk2os736AYM&X-Plex-Language=pt-BR&Accept-Language=pt-BR",

            poster: ""
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
      <p><br /></p>

      <Link to="/"><Button variant="primary" size="lg" width="80%">
      Home
        </Button></Link>

<p><br /></p>

      </nav></div></div>
            
        );
    }
}
export default Teste2;