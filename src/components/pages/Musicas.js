import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Musicas() {

  return (
    <>
     <p><br /></p>
      
        <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/3858200bc307bc603e159858383c367c.webp" />
      <Card.Body>
        <Card.Title>TOP TV</Card.Title>

        <Link to="./Toptv"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/685286c919ab8768f8a6f70eb5dc8171.webp" />
      <Card.Body>
        <Card.Title>KPOP TV</Card.Title>
        
        <Link to="./Kpoptv"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.cxtv.com.br/img/Tvs/Logo/webp-m/8ab499d9cc282fd063424971ef738fec.webp" />
      <Card.Body>
        <Card.Title>TOP MIX TV</Card.Title>

        <Link to="./Topmixtv"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>   
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://api.my-radios.com/images/thumb.php?countryCode=AT&name=27835-6617440.png&size=200" />
      <Card.Body>
        <Card.Title>Kronehit</Card.Title>
        <Link to="./Kronehit"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://assets.iptv2022.com/uploads/channel/14120/thumb_REDE_SULAME%CC%81RICA.png" />
      <Card.Body>
        <Card.Title>Sulamerica</Card.Title>

        <Link to="./Sulamerica"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

   

    



    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.tvgraopara.com.br/wp-content/uploads/bfi_thumb/download-nzlm2lmoj7gnrngw62qn5x5i5erjyxmrily4z26zn0.jpg" />
      <Card.Body>
        <Card.Title>TV Grão Pará</Card.Title>

        <Link to="./Graopara"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>



  

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.radios.com.br/radio/xl/radio13213_1559217338.png" />
      <Card.Body>
        <Card.Title>FM O Dia</Card.Title>

        <Link to="./Fmodia"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://mma.prnewswire.com/media/1166733/Party_Tyme_Karaoke_Logo.jpg" />
      <Card.Body>
        <Card.Title>Party Tyme Karaokê</Card.Title>
        <Card.Text><p2>Cante as musicas mais tocadas!</p2>
        </Card.Text>
        <Link to="./Parttk"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>



   



    <p></p>

    </>



  );
}

