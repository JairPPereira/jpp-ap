import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
class Acasadomedo extends Component {
    player = {}
    state = {
        video: {
            src: "https://service-stitcher-ipv4.clusters.pluto.tv/v2/stitch/hls/episode/5fad3b119d991c001a9d9549/3063648/playlist.m3u8?terminate=false&sid=0e793af9-d834-11ed-84c4-8ac207788c30&deviceDNT=0&deviceLat=-1.345&deviceLon=-48.4219&deviceModel=web&deviceVersion=111.0.0&includeExtendedEvents=true&serverSideAds=true&appName=web&DRMCapabilities=widevine&deviceId=11294185-0a28-468f-aea7-7f799a2c7740&appVersion=6.11.1-518d6dea293334a5d23e9fd9322e2bfc2744cda3&deviceType=web&deviceMake=chrome&jwt=eyJhbGciOiJIUzI1NiIsImtpZCI6IjJhMzQ1MDFiLWE2NzItNGI3OC04NzYxLWY2ODMzNmZkYzViNiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSUQiOiIwZTc5M2FmOS1kODM0LTExZWQtODRjNC04YWMyMDc3ODhjMzAiLCJjbGllbnRJUCI6IjIwNi44NC4zNC41NSIsImNpdHkiOiJCZWzDqW0iLCJwb3N0YWxDb2RlIjoiNjYwMDAiLCJjb3VudHJ5IjoiQlIiLCJkbWEiOjAsImFjdGl2ZVJlZ2lvbiI6IkJSIiwiZGV2aWNlTGF0IjotMS4zNDUsImRldmljZUxvbiI6LTQ4LjQyMTksInByZWZlcnJlZExhbmd1YWdlIjoicHQiLCJkZXZpY2VUeXBlIjoid2ViIiwiZGV2aWNlVmVyc2lvbiI6IjExMS4wLjAiLCJkZXZpY2VNYWtlIjoiY2hyb21lIiwiZGV2aWNlTW9kZWwiOiJ3ZWIiLCJhcHBOYW1lIjoid2ViIiwiYXBwVmVyc2lvbiI6IjYuMTEuMS01MThkNmRlYTI5MzMzNGE1ZDIzZTlmZDkzMjJlMmJmYzI3NDRjZGEzIiwiY2xpZW50SUQiOiIxMTI5NDE4NS0wYTI4LTQ2OGYtYWVhNy03Zjc5OWEyYzc3NDAiLCJjbUF1ZGllbmNlSUQiOiIiLCJpc0NsaWVudEROVCI6ZmFsc2UsInVzZXJJRCI6IiIsImxvZ0xldmVsIjoiREVGQVVMVCIsInRpbWVab25lIjoiQW1lcmljYS9CZWxlbSIsInNlcnZlclNpZGVBZHMiOnRydWUsImUyZUJlYWNvbnMiOmZhbHNlLCJmZWF0dXJlcyI6e30sImRybSI6eyJuYW1lIjoid2lkZXZpbmUiLCJsZXZlbCI6IkwzIn0sImlzcyI6ImJvb3QucGx1dG8udHYiLCJzdWIiOiJwcmk6djE6cGx1dG86ZGV2aWNlczpCUjpNVEV5T1RReE9EVXRNR0V5T0MwME5qaG1MV0ZsWVRjdE4yWTNPVGxoTW1NM056UXciLCJhdWQiOiIqLnBsdXRvLnR2IiwiZXhwIjoxNjgxMjgxNzYxLCJpYXQiOjE2ODExOTUzNjEsImp0aSI6Ijg2ZTY1ZDZkLWVkYjctNGMzNS1iMjEwLTU0ZTJlNzM0NGM4NyJ9.X_HPA9gad5BaQwsRQqj6t9G6CDSNM_BKc_fpd5H7ICc&CMCD=mtp%3D21100%2Cot%3Dm%2Csf%3Dh%2Csid%3D%2228e19f49-47f0-4c34-bb81-02926c191614%22",

            poster: "https://www.themoviedb.org/t/p/w500_and_h282_face/gl3RKxaM65gyrvRoG3MffTYBoo5.jpg"
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
export default Acasadomedo;