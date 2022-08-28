import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Canaisrun() {

  return (
    <><center><h1>Funciona no momento apenas em dispositivos mobile</h1></center>

        <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img2.static-ottera.com/prod/run/nav_link/thumbnails/widescreen/366x206/guide.jpg" />
      <Card.Body>
        <Card.Title>Canal Principal</Card.Title>
        <Card.Text><p2></p2>
        </Card.Text>
        <Link to="./Runtimepri"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img2.static-ottera.com/prod/run/linear_channel/logo/366x206/runtime_br_action_bg.jpg" />
      <Card.Body>
        <Card.Title>Runtime Ação</Card.Title>
        <Card.Text><p2></p2>
        </Card.Text>
        <Link to="./Runtimeacao"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img2.static-ottera.com/prod/run/linear_channel/logo/366x206/br_comedy_bg.jpg" />
      <Card.Body>
        <Card.Title>Runtime Comédia</Card.Title>
        <Card.Text><p2></p2>
        </Card.Text>
        <Link to="./Runtimecom"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>



    

          <p><br /></p>




    </>



  );
}

