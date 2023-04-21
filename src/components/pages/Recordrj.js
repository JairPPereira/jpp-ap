import React from "react";
import { Link } from 'react-router-dom';
import './videoapp.css';
import Iframe from 'react-iframe'
import './Style.css';

export default function Recordrj() {
  return (
    <div>
          <p><br /></p>
      <Iframe className="video"
        src="https://canais.m3u8live.ml/v.php?id=RecordTVRJ"
        frameborder="0"
        width="100%" 
        allow="autoplay; encrypted-media; fullscreen; pincture in pincture"
        title="video"
      />{" "}
                  <div className="nave">
      <nav>
      <p><br /></p>
      <Link to="/">Home</Link>

<p><br /></p>

      </nav></div></div>

  );
}





