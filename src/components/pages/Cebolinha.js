import React from 'react';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
    export default function Cebolinha() {
        return (
          <div>
                <p><br /></p>
            <iframe
              src="https://streamtape.com/e/pY3gyZG3L9uVdR/"
              frameborder="0"
              width="100%" height="480px"
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