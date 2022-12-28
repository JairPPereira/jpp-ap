import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Porcategoria() {

  return (
    <><center>
      <h1 className='porcategoria'>
      
<nav><p><br /></p>
<Link to="./Acao"><Button variant="primary" size="lg" width="80%">
           Ação
        </Button></Link>

      <p><br /></p>
      <Link to="./animacao"><Button variant="primary" size="lg" width="80%">
      Animação
        </Button></Link>
        <p><br /></p>
      <Link to="./Aventura"><Button variant="primary" size="lg" width="80%">
      Aventura
        </Button></Link>
      
      <p><br /></p>
      <Link to="./Crime"><Button variant="primary" size="lg" width="80%">
      Crime
        </Button></Link>

        <p><br /></p>
      <Link to="./comedia"><Button variant="primary" size="lg" width="80%">
      Comedia
        </Button></Link>
     
      <p><br /></p>
      <Link to="./Drama"><Button variant="primary" size="lg" width="80%">
      Drama
        </Button></Link>
      
      <p><br /></p>
      <Link to="./fantasia"><Button variant="primary" size="lg" width="80%">
      Fantasia
        </Button></Link>
        <p><br /></p>
      <Link to="./Ficcao"><Button variant="primary" size="lg" width="80%">
      Ficção
        </Button></Link>
     
      <p><br /></p>
      <Link to="./Romance"><Button variant="primary" size="lg" width="80%">
      Romance
        </Button></Link>
      
      <p><br /></p>
      <Link to="./Suspense"><Button variant="primary" size="lg" width="80%">
      Suspense
        </Button></Link>
     
      <p><br /></p>
      <Link to="./Series"><Button variant="primary" size="lg" width="80%">
      Séries
        </Button></Link>
      
      <p><br /></p>
      <Link to="./Terror"><Button variant="primary" size="lg" width="80%">
      Terror
        </Button></Link>
        <p><br /></p>
        <Link to="./Documentarios"><Button variant="primary" size="lg" width="80%">
      Documentários
        </Button></Link>
   
      <p><br /></p>

      <Link to="./Filmesn"><Button variant="primary" size="lg" width="80%">
      Filmes nacionais
        </Button></Link>
   
      <p><br /></p>

      <Link to="./Musica"><Button variant="primary" size="lg" width="80%">
      Musica
        </Button></Link>
   
      <p><br /></p>




     
      </nav></h1>
      </center>
    </>
        
        
         
  );
}