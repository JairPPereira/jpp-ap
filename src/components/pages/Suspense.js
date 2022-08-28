import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";

export default function Suspense() {

  return (
    <>
      <h1 className='suspense'>

        <nav>
      <p><br /></p>
      <Link to="./Agentesduplos">
      <img
            src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xvNJfzSHv3zpmBH0Uu8pZTW3f9x.jpg"
            alt="Agentes duplos"
          /></Link>
      <p><br /></p>
      <Link to="./Assasinatosdopassado">Assasinatos do passado</Link>
      <p><br /></p>
      <Link to="./Codigodeconduta">Codigo de conduta</Link>
      <p><br /></p>
      <Link to="./Cadaveresardm">Cadáveres a reunião dos mortos</Link>
      <p><br /></p>
      <Link to="./Ghostland">Ghostland</Link>
      <p><br /></p>
      <Link to="./Ocaminho">O caminho</Link>
      <p><br /></p>
      <Link to="./Odespertar">O despertar</Link>
      <p><br /></p>
      <Link to="./Tempo">Tempo</Link>
      <p><br /></p>


     
      </nav></h1>

    </>
        
        
         
  );
}

