import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Jornalismo() {

  return (
    <>
      <h1 className='tvs'>

        <nav>
          <p><br /></p>

    

    <Card>
    <Card.Body><a href="http://video01.soultv.com.br/cnnbrasil/cnnbrasil/chunklist_w1048115623.m3u8"><Button variant="primary" size="lg" width="100%">
    CNN Brasil - Apenas para navegadores mobile
        </Button></a></Card.Body>
    </Card>



          <p><br /></p>



        </nav></h1>


        <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://ogimg.infoglobo.com.br/in/2939353-ac7-20b/FT1086A/Novamarca-da-Globo-News-que-muda-o-visual-no-dia-18-de-outubroDivulgacao.jpg" />
      <Card.Body>
        <Card.Title>Globonews</Card.Title>
        <Card.Text><p2>O primeiro canal brasileiro de notícias 24 horas no ar.</p2>
        </Card.Text>
        <Link to="./Globonews"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.mundopositivo.com.br/wp-content/uploads/2020/07/cnn-brasil-comemora-conquista-de-publico-da-classe-ab-em-100-dias-de-operacao-1.jpg" />
      <Card.Body>
        <Card.Title>CNN Brasil</Card.Title>
        <Card.Text><p2>Você por dentro de tudo - Notícias ao vivo, fatos da política nacional e internacional no maior canal de notícias do mundo!</p2>
        </Card.Text>
        <Link to="./Cnnbr"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://scontent.fbel16-1.fna.fbcdn.net/v/t1.6435-9/158721817_1982113368612507_7372704316327449635_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=973b4a&_nc_ohc=i6t4_jGBcMwAX_qRqOy&_nc_ht=scontent.fbel16-1.fna&oh=00_AT_mbvArk7mYS-7NqgoMstT9j5XgVdmtYUSfOSkMwFdtAw&oe=6325A5DD" />
      <Card.Body>
        <Card.Title>Bandnews</Card.Title>
        <Card.Text><p2>BandNews TV é um canal de televisão brasileiro de notícias 24 horas sediado em São Paulo, capital paulista, e que foi inaugurado no dia 19 de março de 2001 pelo Grupo Bandeirantes de Comunicação. Sendo o segundo canal de notícias no Brasil. É o quarto canal de notícias mais visto no Brasil.</p2>
        </Card.Text>
        <Link to="./Bandnews"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.cxtv.com.br/img/Tvs/Logo/webp-l/86600ed6f09e4bf48be4e55a0cd01536.webp" />
      <Card.Body>
        <Card.Title>Record News</Card.Title>
        <Card.Text><p2>Record News é um canal de televisão comercial aberto brasileiro, com a programação dedicada principalmente ao telejornalismo, pertencente ao Grupo Record.</p2>
        </Card.Text>
        <Link to="./Recordnews"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>
    
   

   



    <p></p>

    </>



  );
}

