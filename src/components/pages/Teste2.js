import React from 'react';
import Videojs from './video.js';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';




const videoJsOptions = {
  autoplay: false,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: '720px',
  controls: true,
  poster: '',
  sources: [
    {

      src: 'https://service-stitcher-ipv4.clusters.pluto.tv/stitch/hls/channel/5f120f41b7d403000783a6d6/master.m3u8?advertisingId=&appName=web&appVersion=unknown&architecture=&buildVersion=&clientTime=&deviceDNT=0&deviceId=d3c67da60ce646b98729283971eb92b1&deviceLat=-1.4537&deviceLon=-48.5078&deviceMake=Chrome&deviceModel=Chrome&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&marketingRegion=BR&sid=91f46f2a10fd11ecbd449a01a2268404&userId=',
      type: 'application/vnd.apple.mpegurl',
      
    },
  ],
};

const Teste2 = () =>
{
  return (<>

  <Container fluid>
            <p></p>
              <div>
    <Videojs {...videoJsOptions} />  </div>
    
    <p></p>
   </Container>
 
  <div className="nave">
     
                  <p><br /></p>

<Link to="/"><Button variant="primary" size="lg" width="80%">
Home
  </Button></Link>

<p><br /></p>
</div>
  
  </>
  
  )}

  export default Teste2





  