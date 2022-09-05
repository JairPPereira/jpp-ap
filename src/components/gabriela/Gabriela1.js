import React from 'react';
import Videojs from './video.js';


const videoJsOptions = {
  autoplay: false,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: 720,
  height: 600,
  controls: true,
  poster: 'https://www.themoviedb.org/t/p/w500_and_h282_face/7sIhKIufEWofnVUILtGWUOjgwEv.jpg',
  sources: [
    {

      src: 'https://lb2x01.g1novelas.top/stream/720/MCtcZZT5viXBfYm/__001',
      type: 'video/mp4',
      
    },
  ],
};

const Gabriela1 = () =>
  <div>
    <Videojs {...videoJsOptions} />
  </div>;

  export default Gabriela1



