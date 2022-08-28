import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
class Criatura extends Component {
    player = {}
    state = {
        video: {
            src: "https://cdnapisec.kaltura.com/p/513551/sp/51355100/playManifest/entryId/1_7cp28izj/format/applehttp/protocol/https/flavorIds/1_e05gtmq6,1_jwayzdvo,1_v5jy6fxs,1_wk2uh3l7,1_y71tsjra,1_logmkbtz,1_n7scr128/preferredBitrate/1500/maxBitrate/10000/a.m3u8?timestamp=1657973507&id=959&ip=206.84.34.116&override_expiration=1500&sign=%2F20%2FaxFNrlvIy5CbUeejDO%2BHCp9rjnS4T%2BaJLppYNbY%3D&playSessionId=5c005a41-4651-0571-34d4-f6b2412ac55b:8dd82391-0a6a-b7ee-a3a3-8a00ba791960&referrer=aHR0cHM6Ly93d3cucnVudGltZS50di9mZWF0dXJlL2NyaWF0dXJh&clientTag=html5:v7.49",

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
      <Link to="/">Home</Link>

<p><br /></p>

      </nav></div></div>
            
        );
    }
}
export default Criatura;
