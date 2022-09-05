import React from 'react';
import Videojs from './video.js';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';




const videoJsOptions = {
  autoplay: false,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: '720px',
  controls: true,
  poster: 'https://www.themoviedb.org/t/p/w500_and_h282_face/7sIhKIufEWofnVUILtGWUOjgwEv.jpg',
  sources: [
    {

      src: 'https://lb2x01.g1novelas.top/stream/720/ZUAAvtU9lSs62gJ/__001',
      type: 'video/mp4',
      
    },
  ],
};

const Gabriela5 = () =>
{
  return (<>

  <Container fluid>
            <p></p>
              <div>
    <Videojs {...videoJsOptions} />  </div>
    
    <p></p>
   </Container>
 
  <div className="nave">
     
                  <p><br /></p>

<Link to="/"><Button variant="primary" size="lg" width="80%">
Home
  </Button></Link>

<p><br /></p>
</div>
  
  </>
  
  )}

  export default Gabriela5





  