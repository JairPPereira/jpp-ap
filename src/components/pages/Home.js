import React from 'react';
import { Link } from 'react-router-dom';
import { Container} from './styles';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {



  return (

  <Container>
     


<center>
    
    <div>
      <div className='home'>
      <div className="nave">
      <div className="mb-2">

      </div></div></div>
      
        <nav>
        <p><br /></p>

        <Container>
       
        <Card >
      <Card.Body><h3>Todos os Filmes</h3><Link to="/Daaz7"><Button variant="primary" size="lg" width="100%">
          Abrir
        </Button></Link></Card.Body>
    </Card>
    <Card>
      <Card.Body><h3>Filmes Por categoria</h3><Link to="/Porcategoria"><Button variant="primary" size="lg" width="80%">
      Abrir
        </Button></Link></Card.Body>
    </Card>
    <Card>
      <Card.Body><h3>Séries</h3><Link to="/Series"><Button variant="primary" size="lg" width="80%">
      Abrir
        </Button></Link></Card.Body>
    </Card>

    <Card>
      <Card.Body><h3>Documentários</h3><Link to="/Documentarios"><Button variant="primary" size="lg" width="80%">
      Abrir
        </Button></Link></Card.Body>
    </Card>
    <Card>
      <Card.Body><h3>Novelas</h3><Link to="/Novelas"><Button variant="primary" size="lg" width="80%">
      Abrir
        </Button></Link></Card.Body>
    </Card>
    <Card>
      <Card.Body><h3>Playlist de filmes do youtube</h3><Link to="/Playlistyou"><Button variant="primary" size="lg" width="80%">
      Abrir
        </Button></Link></Card.Body>
    </Card>
    <Card>
      <Card.Body><h3>TVs</h3><Link to="/TVs"><Button variant="primary" size="lg" width="80%">
      Abrir
        </Button></Link></Card.Body>
    </Card>
    <Card>
      <Card.Body><h3>Radios</h3><Link to="/Radios"><Button variant="primary" size="lg" width="80%">
      Abrir
        </Button></Link></Card.Body>
    </Card>
    <Card>
      <Card.Body><h3>Musicas do youtube</h3><Link to="/Youtubeml"><Button variant="primary" size="lg" width="80%">Abrir</Button></Link></Card.Body>
    </Card>
    <Card>
      <Card.Body>O site JPP APP é uma plataforma para assistir filmes e séries online, Esta página funciona com base nas últimas tecnologias lançadas nesta geração voltada ao uso de inteligência artificial, robots e API de dados, ou seja, não hospedamos vídeos em nossos servidores, apenas, de forma automática, indexamos os arquivos que são capturados pela web, nos tornando completamente legais e dentro da lei. O uso desta plataforma é de total responsabilidade do usuário. Qualquer violação de direitos autorais, entre em contato com o distribuidor. Em caso de dúvidas ou reclamações sobre o conteúdo, entre em contato conosco para obter a devida ajuda.</Card.Body>
    </Card></Container>
          
  
        </nav>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8092263721786278"
     crossorigin="anonymous"></script>
    <Container fluid="md"><Card>
      <Row>
        <Col>Ajude a manter nosso site</Col>
      
      </Row>
      <Row>
      <Col>Pix: jairppereira21@gmail.com</Col>
      </Row></Card>
    </Container>
       

        <p><br /></p></div></center>
    </Container>
  );
}

export default Home;
