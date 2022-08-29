import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Radios() {

  return (
    <>


       

<CardGroup>
       
    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://1.bp.blogspot.com/-mvFZTJD3EqA/YUaZpxM510I/AAAAAAAABHg/EW790K3rrfIxt3KPjpk5kx8WzgqJcstRACLcBGAsYHQ/s0/mradio.png" />
      <Card.Body>
        <Card.Title>Aparelhagens</Card.Title>
        <Link to="./Aparelhagens"><Button variant="primary" size="lg" width="100%">
      Ouvir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://1.bp.blogspot.com/-mvFZTJD3EqA/YUaZpxM510I/AAAAAAAABHg/EW790K3rrfIxt3KPjpk5kx8WzgqJcstRACLcBGAsYHQ/s0/mradio.png" />
      <Card.Body>
        <Card.Title>Atualidade</Card.Title>
        <Link to="./Atualidade"><Button variant="primary" size="lg" width="100%">
        Ouvir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://1.bp.blogspot.com/-medp1UAfFJQ/TynYnY0UcLI/AAAAAAAAEPY/7WTZK4WCFNo/s1600/DIARIO_FM_BELEM_PA.png" />
      <Card.Body>
        <Card.Title>Diario FM</Card.Title>
        <Link to="./Diario"><Button variant="primary" size="lg" width="100%">
      Ouvir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://1.bp.blogspot.com/-mvFZTJD3EqA/YUaZpxM510I/AAAAAAAABHg/EW790K3rrfIxt3KPjpk5kx8WzgqJcstRACLcBGAsYHQ/s0/mradio.png" />
      <Card.Body>
        <Card.Title>Top Hits INT.</Card.Title>
        <Link to="./Tophits"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://1.bp.blogspot.com/-mvFZTJD3EqA/YUaZpxM510I/AAAAAAAABHg/EW790K3rrfIxt3KPjpk5kx8WzgqJcstRACLcBGAsYHQ/s0/mradio.png" />
      <Card.Body>
        <Card.Title>Videos clips</Card.Title>
        <Link to="./Vdeoclips"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

   
   


    <p></p></CardGroup>

    </>



  );
}

