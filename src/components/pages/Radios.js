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
      <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrkcMHx6zyE7kIUh4L5AhnNJKqlsAO-NQZy6O7gTMjPov-XNRKDVl33CvtbB1XoHeDd430qW4_T0CEA0rQEwQkaJSGlACHA8rvipxWZzdcHgnjatgJ32lokN_vr3CCpaleYI5xrNEHj0sT0CJcxz7d_C2GHa6_Bh7-oW4EqiJsh87EjIxRRDIgWBp-/s1600/uepar.jpg" />
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

