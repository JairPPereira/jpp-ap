import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      JPP APP
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/Afazenda">A Fazenda</Dropdown.Item>
        <Dropdown.Item href="/Daaz9">Todos os Filmes</Dropdown.Item>
        <Dropdown.Item href="/Porcategoria">Filmes Por categoria</Dropdown.Item>
        <Dropdown.Item href="/Series">Séries</Dropdown.Item>
        <Dropdown.Item href="/Documentarios">Documentários</Dropdown.Item>
        <Dropdown.Item href="/Novelas">Novelas</Dropdown.Item>
        <Dropdown.Item href="/Playlistyou">Filmes do youtube</Dropdown.Item>
        <Dropdown.Item href="/TVs">TV</Dropdown.Item>
        <Dropdown.Item href="/Radios">Radios</Dropdown.Item>
        <Dropdown.Item href="/Youtubeml">Musicas do youtube</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/Porcategoria' className='nav-links' onClick={closeMobileMenu}>
              Filmes por categoria
            </Link>
          </li>
          
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        TV
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/Afazenda">A Fazenda</Dropdown.Item>
        <Dropdown.Item href="/Tvab">TV Aberta</Dropdown.Item>
        <Dropdown.Item href="./Tvsf">Filmes</Dropdown.Item>
        <Dropdown.Item href="./Tvsp">Sports</Dropdown.Item>
        <Dropdown.Item href="./Jornalismo">Jornalismo</Dropdown.Item>
        <Dropdown.Item href="./Musicas">Musicas</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            <Link
              to='/novelas'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Novelas
            </Link>
          </li>
          
          <li className='nav-item'><Link
              to='/radios'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Rádios
            </Link>
          </li>
          
          <li className='nav-item'><Link
              to='/series'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Séries
            </Link>
          </li>
        
          
        </ul>

      </nav>
    </>
  );
}

export default Navbar;
