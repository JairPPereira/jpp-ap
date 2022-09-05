import React from 'react';
import Videojs from './video.js';


const videoJsOptions = {
  autoplay: false,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: 720,
  height: 600,
  controls: true,
  sources: [
    {
      src: 'https://lb2x01.g1novelas.top/stream/720/ZUAAvtU9lSs62gJ/__001',
      type: 'video/mp4',
    },
  ],
};

const Gabriela5 = () =>
  <div>
    <Videojs {...videoJsOptions} />
  </div>;

  export default Gabriela5
