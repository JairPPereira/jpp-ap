import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";

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


     
      </nav></h1>

    </>
        
        
         
  );
}

