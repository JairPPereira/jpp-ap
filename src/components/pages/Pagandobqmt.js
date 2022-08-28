import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
class Pagandobqmt extends Component {
    player = {}
    state = {
        video: {
            src: "https://cdnapisec.kaltura.com/p/513551/sp/51355100/playManifest/entryId/1_bzl1pk1b/format/applehttp/protocol/https/flavorIds/1_aql6p39s,1_c9cvgzkl,1_1vk7hyid,1_z4b0akvr,1_p51fwifn,1_kamgc9bg,1_kxy8chbs/preferredBitrate/1500/maxBitrate/10000/a.m3u8?timestamp=1658782734&id=1512&ip=2804%3Ad4b%3A2230%3A1886%3A374d%3A72f2%3A4e1c%3A1c31&override_expiration=1500&sign=zZAqxLbximQfwubdhmRsor2NQTPweTSzQ1VW%2B7gZOss%3D&playSessionId=ebdcc66b-ed2d-e00e-a6c7-a3d79e3651a0:f66d6d18-079f-a398-ad08-4f92234f6a00&referrer=aHR0cHM6Ly93d3cucnVudGltZS50di9wdC1ici9mZWF0dXJlL3BhZ2FuZG8tYmVtLXF1ZS1tYWwtdGVt&clientTag=html5:v7.49",

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
export default Pagandobqmt;