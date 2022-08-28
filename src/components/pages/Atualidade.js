import * as React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import './app.css';

function Atualidade() {
    return (
      <>
        <main>
          <div className="App">
          <p><br /></p>
        <div className='pele'>
          <h2>Atualidade</h2>
          <img class="fit-picture"
            src="https://1.bp.blogspot.com/-mvFZTJD3EqA/YUaZpxM510I/AAAAAAAABHg/EW790K3rrfIxt3KPjpk5kx8WzgqJcstRACLcBGAsYHQ/s0/mradio.png"
            alt="Grapefruit slice atop a pile of other slices"></img>
          <ReactAudioPlayer
            src="http://stream.zeno.fm/3ggkqnsn3ehvv.mp3"
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

  export default  Atualidade;