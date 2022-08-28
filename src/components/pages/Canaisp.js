import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Canaisp() {

  return (
    <><center><h1>Funciona no momento apenas em dispositivos mobile</h1></center>

        <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pluto.tv/channels/5f121262a189a800076b9386/colorLogoSVG.svg?auto=&fit=crop&fill=blur&ixlib=react-9.1.5&w=150&h=90&dpr=1&q=75" />
      <Card.Body>
        <Card.Title>Canal Séries</Card.Title>
        <Card.Text><p2></p2>
        </Card.Text>
        <Link to="./Plutoser"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pluto.tv/channels/5f997e44949bc70007a6941e/colorLogoSVG.svg?auto=&fit=crop&fill=blur&ixlib=react-9.1.5&w=150&h=90&dpr=1&q=75" />
      <Card.Body>
        <Card.Title>Canal Turma da Monica</Card.Title>
        <Card.Text><p2></p2>
        </Card.Text>
        <Link to="./Plutotdam"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>



    

          <p><br /></p>




    </>



  );
}

