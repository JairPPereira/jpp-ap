import React from "react";
import { Link } from 'react-router-dom';
import './videoapp.css';
import Iframe from 'react-iframe'
import './Style.css';


export default function Centauro() {
  return (
    <div>
          <p><br /></p>
      <Iframe
        src="https://embed.warezcdn.net/filme/tt13479592"
        frameborder="0"
        width="100%"
        target="_blank"
        scrolling="no"
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





