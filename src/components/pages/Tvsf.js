import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Tvsf() {

  return (
    <>


       


       
    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Comedy_Central_2018.svg" />
      <Card.Body>
        <Card.Title>Comedy central</Card.Title>
        <Card.Text><p2>Comedy Central é uma rede e canal pago de humor dos Estados Unidos famoso pelos seus programas de comédia. Pertence a Americana Paramount Media Networks. Entre os destaques de sua programação está a animação South Park célebre pelo seu humor politicamente incorreto.</p2>
        </Card.Text>
        <Link to="./Comedyc"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/png;base64,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" />
      <Card.Body>
        <Card.Title>HBO</Card.Title>
        <Card.Text><p2>A HBO Brasil é uma rede de canais de televisão por assinatura brasileira pertencente à Warner Bros. Discovery Americas, subsidiária da Warner Bros.</p2>
        </Card.Text>
        <Link to="./Hbof"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7-jt3Yh-cJqBk_en593s7_dv-yWG7xfnQv27bq0ZoyM9Dk9nRR9tWYbJ1hn-G53_OgE&usqp=CAU" />
      <Card.Body>
        <Card.Title>ITV TV</Card.Title>
        <Card.Text><p2>ITV Channel que pode ser uma mão na roda pra você gostaria de ver alguns canais de TV que não estão dísponivéis no Rio de Janeiro ou em qualquer outro lugar do Brasil.</p2>
        </Card.Text>
        <Link to="./Itvtv"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://megacanais.com/wp-content/uploads/2020/12/megapix.png" />
      <Card.Body>
        <Card.Title>Megapix</Card.Title>
        <Card.Text><p2>O Megapix é um canal de televisão por assinatura brasileiro pertencente ao Grupo Globo. Trata-se do braço da Rede Telecine nos pacotes básicos das operadoras de TV paga, exibindo títulos que geralmente foram lançados pelo Telecine ou HBO, mas que estreiam com exclusividade nos pacotes básicos pelo Megapix.</p2>
        </Card.Text>
        <Link to="./Megapix"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://play-lh.googleusercontent.com/gIiZK9ZUU7tt8N08ozfe8OPBnW-KPREAHdbN1WDvqqSscVdAQuuP2_i2c1Gm2zHJ_S9x" />
      <Card.Body>
        <Card.Title>Pluto TV</Card.Title>
        <Card.Text><p2>A Pluto TV é uma aplicação que lhe permite ver mais de 100 canais de televisão portáteis para a Internet, gratuitamente em qualquer dispositivo, em qualquer lugar. Com este aplicativo, você também pode transmitir Pluto TV via Google Chromecast e assistir à oferta de TV em uma grande TV.</p2>
        </Card.Text>
        <Link to="./Canaisp"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.runtime.tv/themes/custom/run/runtime/logo.png" />
      <Card.Body>
        <Card.Title>Runtime TV</Card.Title>
        <Card.Text><p2>Runtime é onde você encontra filmes e séries premiadas sempre grátis.</p2>
        </Card.Text>
        <Link to="./Canaisrun"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1461742005176909838/mSlnGpF1_400x400.jpg" />
      <Card.Body>
        <Card.Title>Disney Channel Brasil</Card.Title>
        <Card.Text><p2></p2>
        </Card.Text>
        <Link to="./Disneyc"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Warner2018LA.png" />
      <Card.Body>
        <Card.Title>Warner Channel</Card.Title>
        <Card.Text><p2></p2>
        </Card.Text>
        <Link to="./Warnertv"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>



    <p></p>

    </>



  );
}

