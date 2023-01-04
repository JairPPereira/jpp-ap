import React from "react";
import { Link } from 'react-router-dom';
import './videoapp.css';
import Iframe from 'react-iframe'

export default function Outrasradios() {
  return (
    <div>
          <p><br /></p>
      <Iframe
        src="https://jairppereira.github.io/tvweb/radio/"
        frameborder="0"
        width="100%" height="320px"
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





