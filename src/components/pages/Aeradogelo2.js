import React, { Component } from 'react';
import './videoapp.css';
import dashjs from 'dashjs';



 
class Aeradogelo2 extends Component {
    constructor() {
        super();
        
        this.state = {
          url: null
        };
      }
    
      componentDidMount(){
        let url = "https://vod.provider.plex.tv/library/parts/6308468981112-dash.mpd?X-Plex-Session-Identifier=nxe9bsfvnbgauzk9kacgy9h1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.89.1&X-Plex-Client-Identifier=d0yzzrm42oucmj03766m2cfs&X-Plex-Platform=Chrome&X-Plex-Platform-Version=104.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=hosted&X-Plex-Device=Android&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=980x1780%2C320x712&X-Plex-Token=EKXrK4UGPTk2os736AYM&X-Plex-Language=pt-BR&Accept-Language=pt-BR";
        let player = dashjs.MediaPlayer().create();
        player.initialize(document.querySelector("#videoPlayer"), url, true);
      }
    
      render() {
        return (
          <div>
            <video id="videoPlayer" controls></video>
          </div>
        );
      }
    

}


export default Aeradogelo2;