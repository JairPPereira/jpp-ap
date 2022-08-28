import React from 'react';
import { Link } from 'react-router-dom';

const About = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <Link to="/">retornar a página inicial</Link>
          <li>
            <Link to="/usuario">Usuario</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default About;