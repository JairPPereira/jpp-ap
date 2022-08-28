import * as React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import './app.css';

function Diario() {
    return (
      <>

        <main>
          <div className="App">
          <p><br /></p>
        <div className='pele'>
          <h2>Diário FM</h2>
          <img class="fit-picture"
            src="https://blogger.googleusercontent.com/img/a/AVvXsEgOnuvLYhLtmyt9WmJN32_i2wPeOJbfPatLtatxUksLhD_Nev7v5saLrwWbMxPfyUYysEKcRxTc1R1cS-HYBxwFocsyOC0ASMSvtiNt96hpc_WoYJvOSidyLrHXMySg9iXACIya2niAHUlBAw_pLkO9BWGUFnWWjRvTM6sTDcLv6cyRRRoyott82Vnz=s200"
            alt="Grapefruit slice atop a pile of other slices"></img>
          <ReactAudioPlayer
            src="https://hts02.kshost.com.br:8856/live"
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

  export default  Diario;