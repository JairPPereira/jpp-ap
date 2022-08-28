import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
class Osorionews extends Component {
    player = {}
    state = {
        video: {
            src: "https://stmv1.srvif.com/classique/classique/playlist.m3u8",

            poster: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWTV4uULQZCdm1608GCMqt9nLjAHIpJfzLYN-7912whvgzqCzm2oUa23QIjnT84H3i4hsFCH3VDU_A21vjfXH6mNbzmQZpR0Pm2xPFvlIZr-CYbKdYq9LFeKNuAo3UOvuWBX4WQMGxC1XV7dYS5PxbcfNsO7MRblvTrmuMDZKsNWB-1zSlih5-o-MV/s1600/osorio200.jpg"
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
                    width="320px" 
                    height="380px"
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
export default  Osorionews;