import * as React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import './app.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Rauland() {
    return (
      <>
<div className='pele'>
<Container>
    
      <Row xs="auto">
        <Col> <main>
         
         
        <div className='pele'>
          <h2>Rauland FM</h2>
          <img class="fit-picture"
            src="https://1.bp.blogspot.com/-TGdVG07kU6s/YUFq5Toxe9I/AAAAAAAABFY/-X_xXV09DkcTfBPs2C7Oi7x7mIDuG5BAwCLcBGAsYHQ/s0/rauland.jpg"
            alt="Grapefruit slice atop a pile of other slices"></img></div>

  
    
      
        </main></Col>
       
      </Row>


      <Row xs="auto">
        <Col> 
        <div className='pele'>

 


          
          <ReactAudioPlayer
            src="https://stm1.srvif.com:6672/stream"
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

  export default  Rauland;