import * as React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import './app.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Liberdadefm() {
    return (
      <>
<div className='pele'>
<Container>
    
      <Row xs="auto">
        <Col> 
         
         
       
     
         

  
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.webrad.io/images/logos/radiosaovivo-net/liberdade-belem.png" />
      <Card.Body>
        <Card.Title>\liberdade FM</Card.Title>
      
      </Card.Body>

    </Card>
    <ReactAudioPlayer
            src="https://s28.maxcast.com.br:8060/live"
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

  export default  Liberdadefm;