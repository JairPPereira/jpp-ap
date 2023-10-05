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
    
        <Dropdown.Item href="/Daaz9">Todos os Filmes</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

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
          
         
        
          
        </ul>

      </nav>
    </>
  );
}

export default Navbar;
