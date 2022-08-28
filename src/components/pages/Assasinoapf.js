import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
class Assasinoapf extends Component {
    player = {}
    state = {
        video: {
            src: "https://cdnapisec.kaltura.com/p/513551/sp/51355100/playManifest/entryId/1_ecu4brjs/format/applehttp/protocol/https/flavorIds/1_p1uxdqeo,1_xq5kgt4i,1_gv16qil4,1_byszakit,1_92bwkr61,1_gybeaylu,1_ewwo60sk/preferredBitrate/1500/maxBitrate/10000/a.m3u8?timestamp=1660788610&id=1407&ip=167.249.209.245&override_expiration=1500&sign=txKN8TTqaBt3hWzbVYaXgJGR9Kchh6qVC3ZEbMuIjro%3D&playSessionId=4be6d8f8-b449-e7c5-6fc2-e602a5bffe88:00e0c10b-ed82-d1cf-d437-432900fe898d&referrer=aHR0cHM6Ly93d3cucnVudGltZS50di9wdC1ici9mZWF0dXJlL2Fzc2Fzc2luby1wcmVjby1maXhv&clientTag=html5:v7.50",

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

</nav></div>
     {" "}</div> 
            
        );
    }
}
export default Assasinoapf;