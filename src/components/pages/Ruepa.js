import * as React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import './app.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Ruepa() {
    return (
      <>
<div className='pele'>
<Container>
    
      <Row xs="auto">
        <Col> <main>
         
         
        <div className='pele'>
          <h2>Rádio Uepa</h2>
          <img class="fit-picture"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrkcMHx6zyE7kIUh4L5AhnNJKqlsAO-NQZy6O7gTMjPov-XNRKDVl33CvtbB1XoHeDd430qW4_T0CEA0rQEwQkaJSGlACHA8rvipxWZzdcHgnjatgJ32lokN_vr3CCpaleYI5xrNEHj0sT0CJcxz7d_C2GHa6_Bh7-oW4EqiJsh87EjIxRRDIgWBp-/s1600/uepar.jpg"
            alt="Grapefruit slice atop a pile of other slices"></img></div>

  
    
      
        </main></Col>
       
      </Row>


      <Row xs="auto">
        <Col> 
        <div className='pele'>

 


          
          <ReactAudioPlayer
            src="https://s43.maxcast.com.br:8573/live?id=194309176181"
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

  export default  Ruepa;