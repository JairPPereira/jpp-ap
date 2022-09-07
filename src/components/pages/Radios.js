import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Radios() {

  return (
    <>


       

<CardGroup>
       
    

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://1.bp.blogspot.com/-medp1UAfFJQ/TynYnY0UcLI/AAAAAAAAEPY/7WTZK4WCFNo/s1600/DIARIO_FM_BELEM_PA.png" />
      <Card.Body>
        <Card.Title>Diario FM</Card.Title>
        <Link to="./Diario"><Button variant="primary" size="lg" width="100%">
      Ouvir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://1.bp.blogspot.com/-TGdVG07kU6s/YUFq5Toxe9I/AAAAAAAABFY/-X_xXV09DkcTfBPs2C7Oi7x7mIDuG5BAwCLcBGAsYHQ/s0/rauland.jpg" />
      <Card.Body>
        <Card.Title>Rauland FM</Card.Title>
        <Link to="./Rauland"><Button variant="primary" size="lg" width="100%">
      Ouvir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://s43.maxcast.com.br/cover/50197/6fbc4263/c9bc6269/c0daa670/1444691e-f1b3-3b4a-9cd9-a03d810cd0c1.jpg" />
      <Card.Body>
        <Card.Title>Rádio Uepa</Card.Title>
        <Link to="./Ruepa"><Button variant="primary" size="lg" width="100%">
      Ouvir
        </Button></Link>
      </Card.Body>
    </Card></center>

 
    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.webrad.io/images/logos/radiosaovivo-net/99-fm-belem.png" />
      <Card.Body>
        <Card.Title>Radio 99 FM</Card.Title>
        <Link to="./Noventaenove"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.webrad.io/images/logos/radiosaovivo-net/boas-novas-belem.png" />
      <Card.Body>
        <Card.Title>Radio Boas Novas FM</Card.Title>
        <Link to="./Rboasnovas"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.webrad.io/images/logos/radiosaovivo-net/liberdade-belem.png" />
      <Card.Body>
        <Card.Title>Radio Liberdade FM</Card.Title>
        <Link to="./Liberdadefm"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>




   
    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://1.bp.blogspot.com/-mvFZTJD3EqA/YUaZpxM510I/AAAAAAAABHg/EW790K3rrfIxt3KPjpk5kx8WzgqJcstRACLcBGAsYHQ/s0/mradio.png" />
      <Card.Body>
        <Card.Title>Aparelhagens</Card.Title>
        <Link to="./Aparelhagens"><Button variant="primary" size="lg" width="100%">
      Ouvir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://1.bp.blogspot.com/-mvFZTJD3EqA/YUaZpxM510I/AAAAAAAABHg/EW790K3rrfIxt3KPjpk5kx8WzgqJcstRACLcBGAsYHQ/s0/mradio.png" />
      <Card.Body>
        <Card.Title>Atualidade</Card.Title>
        <Link to="./Atualidade"><Button variant="primary" size="lg" width="100%">
        Ouvir
        </Button></Link>
      </Card.Body>
    </Card></center>
    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://1.bp.blogspot.com/-mvFZTJD3EqA/YUaZpxM510I/AAAAAAAABHg/EW790K3rrfIxt3KPjpk5kx8WzgqJcstRACLcBGAsYHQ/s0/mradio.png" />
      <Card.Body>
        <Card.Title>Top Hits INT.</Card.Title>
        <Link to="./Tophits"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://1.bp.blogspot.com/-mvFZTJD3EqA/YUaZpxM510I/AAAAAAAABHg/EW790K3rrfIxt3KPjpk5kx8WzgqJcstRACLcBGAsYHQ/s0/mradio.png" />
      <Card.Body>
        <Card.Title>Videos clips</Card.Title>
        <Link to="./Vdeoclips"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>


    <p></p></CardGroup>

    </>



  );
}

