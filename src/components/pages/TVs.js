import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function TVs() {

  return (
    <>
      <h1 className='tvs'>

        <nav>
          <p><br /></p>

    <Card>
    <Card.Body><Link to="./Tvab"><Button variant="primary" size="lg" width="100%">
    TV Aberta
        </Button></Link></Card.Body>
    </Card>

    <Card>
    <Card.Body><Link to="./Tvsf"><Button variant="primary" size="lg" width="100%">
    Filmes
        </Button></Link></Card.Body>
    </Card>


    <Card>
    <Card.Body><Link to="./Tvsp"><Button variant="primary" size="lg" width="100%">
    Sports
        </Button></Link></Card.Body>
    </Card>


    <Card>
    <Card.Body><Link to="./Jornalismo"><Button variant="primary" size="lg" width="100%">
    Jornalismo
        </Button></Link></Card.Body>
    </Card>

    <Card>
    <Card.Body><a href="https://music.youtube.com/watch?v=NWqnYU6Ors0&list=RDAMPLPLQp-UAdzge47nte4vXsnIDBeQjAQSzfyc"><Button variant="primary" size="lg" width="100%">
    Teste 2
        </Button></a></Card.Body>
    </Card>



    <Card>
    <Card.Body><Link to="./Teste2"><Button variant="primary" size="lg" width="100%">
  Teste 3
        </Button></Link></Card.Body>
    </Card>
    

   



          <p><br /></p>



        </nav></h1>
       



    <p></p>

    </>



  );
}

