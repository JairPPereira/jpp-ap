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
        let url = "https://ottvsmediaservice.ottvs.com.br/f7b18088-1ab3-4e83-8bf0-781692c29319/0271676_movie.ism/QualityLevels(3599836)/Fragments(video=479645833,format=mpd-time-csf)";
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