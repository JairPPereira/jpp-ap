import React from 'react';
import { Link } from 'react-router-dom';
import './videoapp.css';
import Iframe from 'react-iframe'
 
    export default function Magali() {
        return (
          <div>
                <p><br /></p>
            <Iframe
              src="https://voe.sx/e/y3hiwuwc3yft"
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