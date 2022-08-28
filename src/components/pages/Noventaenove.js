import * as React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import './app.css';

function F99() {
    return (
      <>
        <main>
          <div className="App">
          <p><br /></p>
        <div className='pele'>
          <h2>99 FM</h2>
          <img class="fit-picture"
            src="https://blogger.googleusercontent.com/img/a/AVvXsEgUu4NGgas5-F2I9qmDNFWzZGLtPwkQzLNX7bLrEMRGKN1U8-Vdmu42-BGGDfS8bCfQwQ5pxoMZAVSadOO-DNNZrEiadzA0F-IfWgdLlBql9GkB13datNJiEPEephvF9VDF0seTGom22RWI9I2LupC_vEcdgznRRHLhSItPnn7-FE83k7B91sQJ8GAy=s200"
            alt="Grapefruit slice atop a pile of other slices"></img>
          <ReactAudioPlayer
            src="https://hts02.kshost.com.br:8862/live"
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

  export default  F99;