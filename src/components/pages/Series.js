import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Series() {

  return (
    <>


       

<CardGroup>
       
    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/f496cm9enuEsZkSPzCwnTESEK5s.jpg" />
      <Card.Body>
        <Card.Title>Friends (1994)</Card.Title>
        <Link to="./Friends"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/l2ezB41chGDjXcKo24lseuXYtKP.jpg" />
      <Card.Body>
        <Card.Title>Game of Thrones (2011)</Card.Title>
        <Link to="./Seriegot"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9n4dv0aGRb8Ma15H7jbWsY7Eg0N.jpg" />
      <Card.Body>
        <Card.Title>Os Simpsons (1989)</Card.Title>
        <Link to="../Ossimpson"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qx3SJlAp2RK656TusqKx1qEqVMW.jpg" />
      <Card.Body>
        <Card.Title>Power Rangers (1993)</Card.Title>
        <Link to="./Powerr"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lA9CNSdo50iQPZ8A2fyVpMvJZAf.jpg" />
      <Card.Body>
        <Card.Title>Twin Peaks (1990)</Card.Title>
        <Link to="./Twinpeaks"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/syH5iXKaLEiTEgF1ffF8OJUbCaS.jpg" />
      <Card.Body>
        <Card.Title>Um Maluco no Pedaço</Card.Title>
        <Link to="../Ummaluconp"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lQmJRW6vwKSAROylB3JrrGJGccj.jpg" />
      <Card.Body>
        <Card.Title>Turma da Mônica (2022)</Card.Title>
  <Link to="./157485"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg" />
      <Card.Body>
        <Card.Title>The Walking Dead (2010)</Card.Title>

        <Link to="./1402"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/djtaj7BaymIoAwbNPGfnORUqwO9.jpg" />
      <Card.Body>
        <Card.Title>Homem-Aranha: A Série</Card.Title>

        <Link to="./Homemasa"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

   


    <p></p></CardGroup>

    </>



  );
}

