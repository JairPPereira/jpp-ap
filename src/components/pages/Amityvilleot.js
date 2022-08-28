import React, { Component } from 'react';
import './videoapp.css';
import dashjs from 'dashjs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';



 
class Amityvilleot extends Component {
    constructor() {
        super();
        
        this.state = {
          url: null
        };
      }
    
      componentDidMount(){
        let url = "https://vod.provider.plex.tv/library/parts/6298859736001-dash.mpd?X-Plex-Session-Identifier=qwyte7twakn8jnq9scv7mid1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.89.1&X-Plex-Client-Identifier=d0yzzrm42oucmj03766m2cfs&X-Plex-Platform=Chrome&X-Plex-Platform-Version=32.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=hosted&X-Plex-Device=Android&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=980x1780%2C320x712&X-Plex-Token=EKXrK4UGPTk2os736AYM&X-Plex-Language=pt-BR&Accept-Language=pt-BR";
        let player = dashjs.MediaPlayer().create();
        player.initialize(document.querySelector("#videoPlayer"), url, true);
      }
    
      render() {
        return (
          <div>
            <Container fluid>
      <Row><p><br /></p>
        <Col><video id="videoPlayer" controls width="100%" height="auto"></video>
        </Col>
      </Row>
    </Container><center>
      
    <nav>
      <p><br /></p>
      <Link to="/">Home</Link>

<p><br /></p>

      </nav></center>
          </div>
        );
      }
    

}


export default Amityvilleot;