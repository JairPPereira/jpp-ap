import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './videoapp.css';
import Iframe from 'react-iframe'
import './Style.css';

export default function Globonews() {
  return (
    <div>
          <p><br /></p>
      <Iframe
        src="https://playertv.net/tv.php?c=globo-news"
        target="https://playertv.net/tv.php?c=globo-news"
        frameborder="0"
        scrolling="no"
        width="100%" 
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





