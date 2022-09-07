import * as React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import './app.css';

function Noventaenove() {
    return (
      <>
        <main>
          <div className="App">
          <p><br /></p>
        <div className='pele'>
          <h2>99 FM</h2>
          <img class="fit-picture"
            src="https://cdn.webrad.io/images/logos/radiosaovivo-net/99-fm-belem.png"
            alt="Grapefruit slice atop a pile of other slices"></img>
          <ReactAudioPlayer
            src="https://hts02.kshost.com.br:8862/stream/1/"
            controls
          /></div>
  
    
      </div>
        </main>
        <p><br /></p>
        <div className="nave">
        <nav>
        <p><br /></p>
        <Link to="/">Home</Link>
        <p><br /></p>
      
        </nav></div>
      </>
    );
  }

  export default Noventaenove;