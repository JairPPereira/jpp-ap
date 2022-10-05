import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Playlistyou() {

  return (
    <>
      <h1 className='series'>

<nav>
      <p><br /></p>
      <Link to="./Playcda">Playlist Clássicos de Ação</Link>
      <p><br /></p>
      <Link to="./Playclass">Playlist de filmes por Roberto Ludueno</Link>
      <p><br /></p>
      <Link to="./Playnetmovie">Playlist de filmes NetMovie</Link>
      <p><br /></p>
      
      <Card.Body>
        <Card.Text><p2>Playlist 2</p2>
        </Card.Text>
        <a href="https://jpp-ap.onrender.com/filmesy/"><Button variant="primary" size="lg" width="100%"><p1>Assistir</p1>
        
        </Button></a>
      </Card.Body>

      <Link to="https://jpp-ap.onrender.com/filmesy/">Playlist de filmes NetMovie</Link>
      <p><br /></p>
      <Link to="./Youtubeml">Playlist de musicas</Link>
      <p><br /></p>
      <Link to="/calculoiv">Playlist de Cálculo IV</Link>
      <p><br /></p>
      


     
      </nav></h1>

    </>
        
        
         
  );
}

