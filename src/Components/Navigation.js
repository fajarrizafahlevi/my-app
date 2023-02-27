import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ isMenuOpen, toggleMenu }) {
  let menu;

  if (isMenuOpen) {
    menu = (
      <div className="bg-black shadow fixed top-0 right-0 p-7 h-full w-2/5 text-white flex-col text-right">
        <FontAwesomeIcon
          icon={faXmark}
          size="2xl"
          onClick={toggleMenu}
        />
        <ul className="flex-column">
          <li className="mt-3 text-xl">
            <Link
              to="/"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li className="mt-3 text-xl">
            <Link
              to="/todos"
              onClick={toggleMenu}
            >
              Todos
            </Link>
          </li>
          <li className="mt-3 text-xl">
            <Link
              to="/notes"
              onClick={toggleMenu}
            >
              Notes
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <nav>
      <FontAwesomeIcon
        icon={faBars}
        size="2xl"
        onClick={toggleMenu}
      />
      {menu}
    </nav>
  );
}

export default Navigation;
