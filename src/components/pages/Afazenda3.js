import React from "react";
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Iframe from 'react-iframe'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

export default function Afazenda3() {
  return (
    <div>
          <p><br /></p>
          <div><Container fluid>
            <Row>
              <Col>
      <Iframe
        src="https://tv.appmj.xyz/tv.php?canal=fazenda1"
        target="https://tv.appmj.xyz/tv.php?canal=fazenda1"
        scrolling="no"
        data-draggable="none"
        marginwidth="0"
        marginheight="0"
        data-popup="none" 
        frameborder="0"
        width="100%" 
        allow="autoplay; encrypted-media; fullscreen; pincture in pincture"
        title="video"
      />{" "}
      </Col></Row></Container>
       <div className="nave">
     
   
       <p><br /></p>
                  <Link to="/Afazenda"><Button variant="primary" size="lg" width="80%">
Opção 1
  </Button></Link>

  <Link to="/Afazenda2"><Button variant="primary" size="lg" width="80%">
Opção 2
  </Button></Link>

  <Link to="/Afazenda3"><Button variant="primary" size="lg" width="80%">
Opção 3
  </Button></Link>

  <Link to="/Afazenda4"><Button variant="primary" size="lg" width="80%">
Opção 4
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


