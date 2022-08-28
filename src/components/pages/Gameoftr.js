import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Gameoftr() {

  return (

      <>
        <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w130_and_h195_bestv2/wNOdNgqoySuWbQk3F0QZjPKp8X7.jpg" />
      <Card.Body>
        <Card.Title>1ª Temporada</Card.Title>
        <Card.Text><p2>A nobre Casa Stark, liderada pelo lorde Eddard Stark se vê em meio de um esquema de traição ao rei Robert Baratheon quando a mão do rei, Jon Arryn, morre misteriosamente.</p2>
        </Card.Text>
        <Link to="./Gameoft"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center><p></p>



    






    </>



  );
}

