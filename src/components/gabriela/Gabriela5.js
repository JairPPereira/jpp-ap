import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import 'bootstrap/dist/css/bootstrap.min.css';
import Vid from "https://lb2x01.g1novelas.top/stream/720/ZUAAvtU9lSs62gJ/__001";

export default function Gabriela5() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  return (
    <div className="Gabriela5">
      <h1>react-player-mp4</h1>
      <Container>
       
        <div style={{ opacity: isVideoLoaded ? 1 : 0 }}>
          <ReactPlayer
            url={Vid}
            playing={true}
            controls={true}
            loop={true}
            muted={true}
            playsinline={true}
            onReady={onLoadedData}
          />
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
  .video-thumb {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: opacity 400ms ease 0ms;
  }
  .tiny {
    filter: blur(20px);
    transform: scale(1.1);
    transition: visibility 0ms ease 400ms;
  }
`;
