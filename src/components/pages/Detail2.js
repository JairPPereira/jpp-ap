//import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { Container } from './styles';

function Details2() {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=fcfe44809de84129fab53e785124bb95&language=pt-BR`)
    .then(response => response.json())
    .then(data => {
      const {title, poster_path, release_date, overview} = data
      const movie = {
        id,
        title,
        image: `${imagePath}${poster_path}`,
        sinopse: overview,
        releaseDate: release_date,
      }
      setMovie(movie)
    })
  }, [id])

  return (
    <Container>
      
      <div className="movie">
    
     
      <div className="details2">
        <h1>{movie.title}</h1>
<image src=""></image>
        
        <span>Sinopse: {movie.sinopse}</span>

        <span className='release-date'>Release date: {movie.releaseDate}</span>
        
       

       </div></div>
         
        <span><Link to={`/${movie.id}`}><Button variant="primary" size="lg" width="80%">
          Assistir
        </Button></Link></span>

     

       
      
    </Container>

    

  );
}

export default Details2;
