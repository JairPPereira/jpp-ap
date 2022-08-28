import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";

export default function Radios() {

  return (
    <>
      <h1 className='radios'>
 
<nav>
      <p><br /></p>
      <Link to="./Aparelhagens">Aparelhagens</Link>
      <p><br /></p>
      <Link to="./Atualidade">Atualidade</Link>
      <p><br /></p>
      <Link to="./Diario">Diario FM</Link>
      <p><br /></p>
      <Link to="./Tophits">Top Hits internacional</Link>
      <p><br /></p>
      <Link to="./Vdeoclips">Videos clips</Link>


     
      </nav></h1>

    </>
        
        
         
  );
}

