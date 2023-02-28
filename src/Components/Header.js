import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Header({ isMenuOpen, toggleMenu }) {
  return (
    <header className="sticky top-0 bg-white border-b p-5 flex justify-between items-center">
      <Link to="/">
        <span className="font-bold text-3xl">My App</span>
      </Link>
      <Navigation
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
    </header>
  );
}

export default Header;
