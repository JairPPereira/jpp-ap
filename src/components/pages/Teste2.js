import React, { Component } from 'react';
import './videoapp.css';
import dashjs from 'dashjs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';



 
class Teste2 extends Component {
    constructor() {
        super();
        
        this.state = {
          url: null
        };
      }
    
      componentDidMount(){
        let url = "https://stream.vagalume.fm/hls/14623883771774082279/aac.m3u8";
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
 
      <Link to="/"><Button variant="primary" size="lg" width="80%">
      Home
        </Button></Link>

<p><br /></p>

      </nav></center>
          </div>
        );
      }
    

}


export default Teste2;