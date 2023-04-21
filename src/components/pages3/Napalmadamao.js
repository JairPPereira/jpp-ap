import React from "react";
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Iframe from 'react-iframe'
import './Style.css';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Napalmadamao() {
  return (
    <div>
          <p><br /></p>
          <div><Container fluid>
            <Row>
              <Col>
      <Iframe
        src="https://embedflix.net/filme/tt26160190"
        target="_blank"
        scrolling="no"
        data-draggable="none"
        marginwidth="0"
        marginheight="0"
        data-popup="none" 
        frameborder="0"
        width="100%" 
        allow="autoplay; encrypted-media; fullscreen; pincture in pincture"
        title="video"
      ></Iframe>{" "}
      </Col></Row></Container>
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





