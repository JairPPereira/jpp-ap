import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import './videoapp.css';
import { Link } from 'react-router-dom';

 
class Afamilia extends Component {
    player = {}
    state = {
        video: {
            src: "https://cdnapisec.kaltura.com/p/513551/sp/51355100/playManifest/entryId/1_rdbyqlyk/format/applehttp/protocol/https/flavorIds/1_fd37tw6k,1_tc7g5efs,1_d0w1qnop,1_8nfainee,1_29i9sy7m,1_0ihd9ech,1_l076vtuq/preferredBitrate/1500/maxBitrate/10000/a.m3u8?timestamp=1660048831&id=4857&ip=206.84.34.206&override_expiration=1500&sign=jcQX2AxprbCgNm4B1JXcqxc74nq%2BBTO6978fGk6M8B8%3D&playSessionId=a382e1c8-33dc-7b0d-e905-436144253165:f4249a4f-6d56-e2ad-67e7-700ccf349c9b&referrer=aHR0cHM6Ly93d3cucnVudGltZS50di9wdC1ici9mZWF0dXJlL2ZhbWlsaWE=&clientTag=html5:v7.50",

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
export default Afamilia;