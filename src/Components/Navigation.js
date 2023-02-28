import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

function Navigation({ isMenuOpen, toggleMenu, closeMenu }) {
  return (
    <nav>
      <FontAwesomeIcon
        icon={faBars}
        size="2xl"
        className="cursor-pointer"
        onClick={toggleMenu}
      />

      {isMenuOpen ? <Menu closeMenu={closeMenu} /> : null}
    </nav>
  );
}

export default Navigation;
