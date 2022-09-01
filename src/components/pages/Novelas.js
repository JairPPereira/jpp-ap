import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Novelas() {

  return (
    <>


       

<CardGroup>
       
    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4OZoWlrM6jYxD1gpYo8e6qbdOS3.jpg" />
      <Card.Body>
        <Card.Title>Gabriela (2012)</Card.Title>
        <Link to="/gabriela"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    

 

   


    <p></p></CardGroup>

    </>



  );
}

