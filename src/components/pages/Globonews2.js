import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './videoapp.css';

export default function Globonews2() {
  return (
    <div>
          <p><br /></p>
      <iframe
        src="https://embedflix.net/tv/br-globo-news-hd"
        target="_blank"
        frameborder="0"
        scrolling="no"
        width="100%" height="600px"
        allow="autoplay; encrypted-media; fullscreen; pincture in pincture"
        title="video"
      />{" "}
                  <div className="nave">
      <nav>
      <center>
        <div class="btn-group" role="group" aria-label="Exemplo básico">
        <Link to="/globonews"><Button variant="primary" size="lg" width="80%">
          Opção 1
        </Button></Link>
 
  <Link to="/globonews2"><Button variant="primary" size="lg" width="80%">
          Opção 2
        </Button></Link>
</div></center>

      </nav></div>
      <div className="nave">
      <nav>
      <p><br /></p>
      <Link to="/">Home</Link>

<p><br /></p>

      </nav></div> 
      
      
      </div>

  );
}





