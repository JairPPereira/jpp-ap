import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



import 'bootstrap/dist/css/bootstrap.min.css';

export default function Canaisp() {

  return (
    <><center><h1>Funciona no momento apenas em dispositivos mobile</h1></center>

    


    <CardGroup>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pluto.tv/channels/5f997e44949bc70007a6941e/colorLogoSVG.svg?auto=&fit=crop&fill=blur&ixlib=react-9.1.5&w=150&h=90&dpr=1&q=75" />
      <Card.Body>

        <Link to="./Plutotdam"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pluto.tv/channels/5f121262a189a800076b9386/colorLogoSVG.svg?auto=&fit=crop&fill=blur&ixlib=react-9.1.5&w=150&h=90&dpr=1&q=75" />
      <Card.Body>

        <Link to="./Plutoser"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pluto.tv/channels/5f120e94a5714d00074576a1/featuredImage.jpg?auto=&ixlib=react-9.1.5&w=224&h=124&dpr=1&q=75" />
      <Card.Body>

        <Link to="/plutosucesso"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card>

    </CardGroup>

    

          <p><br /></p>




    </>



  );
}

