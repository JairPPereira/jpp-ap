import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

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
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          JPP APP
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/Daaz' className='nav-links' onClick={closeMobileMenu}>
              Todos os Filmes
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/categoria'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Filmes Por Categoria<i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
          <li>
            <Link
              to='/series'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >Series
            </Link>
          </li>
            <Link
              to='/tvs'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              TVs
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
          
        </ul>

      </nav>
    </>
  );
}

export default Navbar;
