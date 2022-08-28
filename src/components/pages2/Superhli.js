import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';


 
class Superhli extends Component {
    player = {}
    state = {
        video: {
            src: "https://cdnapisec.kaltura.com/p/513551/sp/51355100/playManifest/entryId/1_q9addcc8/format/applehttp/protocol/https/flavorIds/1_ptr0cy7y,1_azioujfh,1_liue9b2u,1_v2vb2npe,1_80xol581,1_83frhz33,1_94kke9g0/preferredBitrate/1500/maxBitrate/10000/a.m3u8?timestamp=1661436316&id=6244&ip=206.84.34.53&override_expiration=1500&sign=zJ69Y8p1T2O%2B34sTVSMP4XdYtFywZ1nJZa6l2svzU3o%3D&playSessionId=bcfadce1-0add-da06-1854-f5317d4b505f:576b54a6-b5d2-ab5a-8872-3c429d46d371&referrer=aHR0cHM6Ly93d3cucnVudGltZS50di9wdC1ici9mZWF0dXJlL3N1cGVyLWhlcm9pcy1saWdhLWRhLWluanVzdGljYQ==&clientTag=html5:v7.50",

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
                    aspectRatio= "4:3"  
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

</nav></div>
  {" "}</div> 
            
        );
    }
}









export default Superhli;
