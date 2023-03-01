import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Header({ isMenuOpen, toggleMenu, closeMenu }) {
  return (
    <header className="fixed top-0 border-b bg-white shadow">
      <div className="flex h-20 w-screen px-5 justify-between items-center">
        <Link to="/">
          <span className="font-bold text-3xl">My App</span>
        </Link>
        <Navigation
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />
      </div>
    </header>
  );
}

export default Header;
