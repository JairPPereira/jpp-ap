import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {

  return (
  <center>
    
    <div>
      <div className='home'>
      <div className="nave">
      <div className="mb-2">

      </div></div></div>
      
        <nav>
        <p><br /></p>
  
        
        <Card>
      <Card.Body><Link to="/Daaz7"><Button variant="primary" size="lg" width="100%">
          Todos os Filmes
        </Button></Link></Card.Body>
    </Card>
    <Card>
      <Card.Body><Link to="/Porcategoria"><Button variant="primary" size="lg" width="80%">
        Filmes Por categoria
        </Button></Link></Card.Body>
    </Card>
    <Card>
      <Card.Body> <Link to="/Series"><Button variant="primary" size="lg" width="80%">
        Séries
        </Button></Link></Card.Body>
    </Card>
    <Card>
      <Card.Body><Link to="/Playlistyou"><Button variant="primary" size="lg" width="80%">
        Playlist de filmes do youtube
        </Button></Link></Card.Body>
    </Card>
    <Card>
      <Card.Body><Link to="/TVs"><Button variant="primary" size="lg" width="80%">
        TVs
        </Button></Link></Card.Body>
    </Card>
    <Card>
      <Card.Body><Link to="/Radios"><Button variant="primary" size="lg" width="80%">
        Radios
        </Button></Link></Card.Body>
    </Card>
    <Card>
      <Card.Body>O site JPP APP é uma plataforma para assistir filmes e séries online, Esta página funciona com base nas últimas tecnologias lançadas nesta geração voltada ao uso de inteligência artificial, robots e API de dados, ou seja, não hospedamos vídeos em nossos servidores, apenas, de forma automática, indexamos os arquivos que são capturados pela web, nos tornando completamente legais e dentro da lei. O uso desta plataforma é de total responsabilidade do usuário. Qualquer violação de direitos autorais, entre em contato com o distribuidor. Em caso de dúvidas ou reclamações sobre o conteúdo, entre em contato conosco para obter a devida ajuda.</Card.Body>
    </Card>
          
  
        </nav>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8092263721786278"
     crossorigin="anonymous"></script>
    <Container fluid="md">
      <Row>
        <Col>Ajude a manter nosso site</Col>
      
      </Row>
      <Row>
      <Col>Pix: jairppereira21@gmail.com</Col>
      </Row>
    </Container>
       

        <p><br /></p></div></center>


   
    
        
         
  );
}
