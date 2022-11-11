import styled from "styled-components";

export const Container = styled.div`
 
 
  
  h1 {
    text-align: center;
    margin: 1rem 0;

  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  column-gap: 1rem;
  row-gap: 1rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
    border-radius: 1rem;
    margin-bottom: rem;
  }

  span {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`
