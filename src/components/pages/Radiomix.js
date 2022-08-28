import * as React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import './app.css';

function Mix() {
    return (
      <>
        <main>
          <div className="App">
          <p><br /></p>
        <div className='pele'>
          <h2>Radiomix</h2>
          <img class="fit-picture"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg34lQGNc-Hui3q9xEU3pBxOC4CsXXxxfnjUebIgodguhhdKOHJc4IqhMUruAd_csyJyK2S62OHqlxcWMwtLV6uLzKqCdtwN8M4ydUubDFTXdZxBfiXA-jj1F66mfbYwq3YwR4z1ryRjA1XlVTgt23SD76dYmxhFhu6Nu0rFvKOxmL0ZpXsk6CNtSMc/s1600/mixbelem200.webp"
            alt="Grapefruit slice atop a pile of other slices"></img>
          <ReactAudioPlayer
            src="https://playerservices.streamtheworld.com/api/livestream-redirect/MIXFM_BELEMPARAAAC.aac"
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

  export default  Mix;