import React from "react";
import { Link } from 'react-router-dom';
import './videoapp.css';
import Iframe from 'react-iframe'
import './Style.css';

export default function Friends() {
  return (
    <div>
          <p><br /></p>
      <Iframe
        src="https://superflixapi.top/serie/1668"
        frameborder="0"
        width="100%"
        target="_blank"
        data-draggable="none"
        marginwidth="0"
        marginheight="0"
        data-popup="none" 
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





