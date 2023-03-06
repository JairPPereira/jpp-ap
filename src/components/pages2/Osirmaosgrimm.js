import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

 
class Osirmaosgrimm extends Component {
    
    player = {}
    state = {
        video: {
            src: "https://cfvod.kaltura.com/scf/hls/p/513551/sp/51355100/serveFlavor/entryId/1_4ks5309g/v/1/pv/1/ev/10/flavorId/1_kfttz0l1/name/a.mp4/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZnZvZC5rYWx0dXJhLmNvbS9zY2YvaGxzL3AvNTEzNTUxL3NwLzUxMzU1MTAwL3NlcnZlRmxhdm9yL2VudHJ5SWQvMV80a3M1MzA5Zy92LzEvcHYvMS9ldi8xMCoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NzgxOTg1MTR9fX1dfQ__&Signature=YjGj3I3H5fS2~G0OfOKhzCwnHDujIBo5AabBL80BsojGDTHRlPkaXg85vIxnxgv5kzEPSKwdlB1ycb8HsrK~557KdKnYrqj5pbLYDvR97VESJEEGzht6hWJog0iCmPtGY0AkZJOXVRLLBecBLE9AwyiNOYLaEFnBD2R~IDIc5z5LR8Q22zxOfNfHbIQDFtAigtcMye0QyCp72TEJqd0MBRnloX1CoV0T7jOWQLa4YyU5hVcADhfyGS8QRy55BA2yPeJyd6h~qDL4tGFVZdDeTArqQ6wo1aboBm1ZW88MQOclAO3em3j-UymuATz6-cjiH4QDOj4qEYqkGZw1VaGL2w__&Key-Pair-Id=APKAJT6QIWSKVYK3V34A",
            crossorigin: "anonymous",

            poster: "https://www.themoviedb.org/t/p/original/aDfGKWdtNHzDmnHkdDyXz7zoDuy.jpg"
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
            <div><Container fluid>
            <Row>
              <Col>
                      <p><br /></p>
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster} 
                    width="720px" 
                    height="auto"
                    crossorigin= "anonymous"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
                    <p><br /></p> </Col></Row></Container>
               <div className="nave">
     
      <p><br /></p>

      <Link to="/"><Button variant="primary" size="lg" width="80%">
      Home
        </Button></Link>

<p><br /></p>

      </div>
      
      
      
      </div>

      
            
        );
    }
}
export default Osirmaosgrimm;