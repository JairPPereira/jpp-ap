import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
class Kv1 extends Component {
    player = {}
    state = {
        video: {
            src: "https://cdnapisec.kaltura.com/p/513551/sp/51355100/playManifest/entryId/1_p2sw27e5/format/applehttp/protocol/https/flavorIds/1_fwrrhz2q,1_eix5gd6m,1_4fx8k7sh,1_5049y1tj,1_hptkuv6l,1_g9xzdsb9,1_ghtu0jxr/preferredBitrate/1500/maxBitrate/10000/a.m3u8?timestamp=1658619092&id=6741&ip=2804%3Ad4b%3A2239%3Aa1df%3Aaed4%3A40ad%3Aea95%3A9bbf&override_expiration=1500&sign=%2FXerWucB%2FbTzaRfBgSH3S6S6%2F8GSmlxa2Tx5LBMnwRU%3D&playSessionId=c2156a21-b31b-2f7b-eb5c-a1e79a0e6d54:f82441df-51af-7f78-691f-350d5c836ed4&referrer=aHR0cHM6Ly93d3cucnVudGltZS50di9wdC1ici9mZWF0dXJlL2t2MS1hbG1hcy1kZS1mZXJybw==&clientTag=html5:v7.49",

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
export default Kv1;