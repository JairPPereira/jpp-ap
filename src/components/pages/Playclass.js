import React from 'react';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
    export default function Playclass() {
        return (
          <div>
                <p><br /></p>
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PL43E2B6163FF95E6E"
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