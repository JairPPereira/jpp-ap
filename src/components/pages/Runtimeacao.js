import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
class Runtimeacao extends Component {
    player = {}
    state = {
        video: {
            src: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=2552&avod=1&coppa=0&is_lat=0&dnt=0&us_privacy=1YN-&did=e78b05811e11e046d69ec53f5c91040f&app_bundle=com.ammo.runtime&app_store_url=https%3A%2F%2Fwww.runtime.tv%2Fdevices&app_domain=runtime.tv&app_name=runtime&custom_targeting=web&custom_4=internal&h=720&w=1280&content_channel=runtime&content_dist_name=internal&device_make=&device_model=&preferred_language=EN&consent=1&gdpr=0&site_page=https%253A%252F%252Fwww.runtime.tv%252Fpt-br%252Fapp%253Fsection%253Depgchannelssection&gender=not_specified&yob=0&livestream=1&custom_param_0=&custom_param_1=handset&custom_param_2=&custom_param_3=&custom_param_4=internal&custom_param_5=web&custom_param_6=South%20America&timestamp=1660864418&id=4676&ip=167.249.209.159&override_expiration=1500&sign=7nSBhWuhWD8juzO3pvtoe%2B8Twpi4oAq70lt%2BoOG6V%2Fo%3D",

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
export default Runtimeacao;