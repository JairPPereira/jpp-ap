import React, { Component } from 'react';
import './videoapp.css';
import dashjs from 'dashjs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';



 
class Teste2 extends Component {
    constructor() {
        super();
        
        this.state = {
          url: null
        };
      }
    
      componentDidMount(){
        let url = "https://live-as-08-24.video.globo.com/d/s/hls-globo-bel/playlist.m3u8?h=0401661728555288073051316616421552018305217KTcxe_fHsvf9LiPQ2E1IkQ&k=html5&a=F&u=86b5c605-29bd-49ee-94fd-38157902dfa7";
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


export default Teste2;