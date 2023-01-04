import React from "react";
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Iframe from 'react-iframe'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Bandnews2() {
  return (
    <div>
          <p><br /></p>
          <div><Container fluid>
            <Row>
              <Col>
      <Iframe 
        src="https://play.tv0800.xyz/adm/v.php?id=bandnews"
        target="_blank"
        scrolling="no"
        data-draggable="none"
        marginwidth="0"
        marginheight="0"
        data-popup="none" 
        frameborder="0"
        width="100%" height="600px"
        allow="autoplay; encrypted-media; fullscreen; pincture in pincture"
        title="video"
      />{" "}
      </Col></Row></Container>
                  <div className="nave">
     
                  <p><br /></p>
                  <Link to="/Bandnews"><Button variant="primary" size="lg" width="80%">
Opção 1
  </Button></Link>

  <Link to="/Bandnews2"><Button variant="primary" size="lg" width="80%">
Opção 2
  </Button></Link>


<p><br /></p>
</div>

<div className="nave">
     
                  <p><br /></p>

<Link to="/"><Button variant="primary" size="lg" width="80%">
Home
  </Button></Link>

<p><br /></p>
</div>
</div></div>



  );
}





