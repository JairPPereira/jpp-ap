import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
class Cincodg extends Component {
    player = {}
    state = {
        video: {
            src: "https://cdnapisec.kaltura.com/p/513551/sp/51355100/playManifest/entryId/1_h3r441ma/format/applehttp/protocol/https/flavorIds/1_sb94p71t,1_62h2vf5j,1_3dsvrjx9,1_1x96hiib,1_gtzmo9dt,1_kh1of1cu,1_s54b0xbi/preferredBitrate/1500/maxBitrate/10000/a.m3u8?timestamp=1662567389&id=2510&ip=167.249.209.243&override_expiration=1500&sign=ipwV9kdT%2B8Qv90WY5%2Bj5nEqwL51oR98VnYoQ4wXFtL0%3D&playSessionId=0e9af4a2-ea9d-1ae5-0581-bdffb54475ab:cc010dfc-170c-838f-24f9-241b2811447e&referrer=aHR0cHM6Ly93d3cucnVudGltZS50di9wdC1ici9mZWF0dXJlLzUtZGlhcy1kZS1ndWVycmE=&clientTag=html5:v7.52",

            poster: "https://www.themoviedb.org/t/p/w500_and_h282_face/yHw26MRmwu8HDKsDsWJZZt3XEi.jpg"
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
export default Cincodg;