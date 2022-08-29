import * as React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import './app.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Diario() {
    return (
      <>
<div className='pele'>
<Container>
    
      <Row xs="auto">
        <Col> <main>
         
         
        <div className='pele'>
          <h2>Diário FM</h2>
          <img class="fit-picture"
            src="https://1.bp.blogspot.com/-medp1UAfFJQ/TynYnY0UcLI/AAAAAAAAEPY/7WTZK4WCFNo/s1600/DIARIO_FM_BELEM_PA.png"
            alt="Grapefruit slice atop a pile of other slices"></img></div>

  
    
      
        </main></Col>
       
      </Row>


      <Row xs="auto">
        <Col> 
        <div className='pele'>

 


          
          <ReactAudioPlayer
            src="https://hts02.kshost.com.br:8856/live"
            controls
          />
          </div>
  
    
  
        </Col>
       
      </Row> 
    </Container>
    </div>
       
        <p><br /></p>
        <div className="nave">
        <nav>
        <p><br /></p>
        <Link to="/">Home</Link>
        <p><br /></p>
      
        </nav></div>
      </>
    );
  }

  export default  Diario;