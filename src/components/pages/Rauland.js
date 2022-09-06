import * as React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import './app.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Rauland() {
    return (
      <>
<div className='pele'>
<Container>
    
      <Row xs="auto">
        <Col> 
         
         
       
     
         

  
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://1.bp.blogspot.com/-TGdVG07kU6s/YUFq5Toxe9I/AAAAAAAABFY/-X_xXV09DkcTfBPs2C7Oi7x7mIDuG5BAwCLcBGAsYHQ/s0/rauland.jpg" />
      <Card.Body>
        <Card.Title>Rauland FM</Card.Title>
      
      </Card.Body>

    </Card>
    <ReactAudioPlayer
            src="https://stm1.srvif.com:6672/stream"
            controls
         
          />
        </Col>
       
      </Row>


      <Row xs="auto">
        <Col> 
      
    
  
        </Col>
       
      </Row> 
    </Container>
    </div>
       
     
        <div className="nave">
        <nav>
        <p><br /></p>
        <Link to="/">Home</Link>
        <p><br /></p>
      
        </nav></div>
      </>
    );
  }

  export default  Rauland;